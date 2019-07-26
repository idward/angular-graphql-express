import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat, Operation, NextLink } from 'apollo-link';
import { onError, ErrorResponse } from 'apollo-link-error';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseItemComponent } from './pages/course-item/course-item.component';

@NgModule({
  declarations: [AppComponent, CourseListComponent, CourseItemComponent],
  imports: [BrowserModule, ApolloModule, HttpLinkModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        //middleware
        const authMiddleware = new ApolloLink((operation: Operation, forward: NextLink) => {
          // operation.setContext({
          //   headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || null)
          // });
          operation.setContext(({ headers }) => {
            headers: headers.append('Authorization', localStorage.getItem('token') || null);
          });
          return forward(operation);
        });
        const link = httpLink.create({ uri: 'http://localhost:4000/graphql' });
        //afterware
        const logoutLink = onError((error: ErrorResponse) => {
          const { networkError } = error;
          if (networkError.statusCode === 401) {
            console.log('Error:', 'Network Error');
          }
        });
        // config for apollo client
        return {
          cache: new InMemoryCache(),
          link: logoutLink.concat(concat(authMiddleware, link))
        };
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
