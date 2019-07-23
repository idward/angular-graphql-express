const CourseResolver = {
  Query: {
    allCourses(parentValue, args, { prisma }, info) {
      return prisma.query.courses(info);
    },
    getCourse(parentValue, { id }, { prisma }, info) {
      return prisma.query.course(
        {
          where: {
            id
          }
        },
        info
      );
    }
  },
  Mutation: {
    addCourse(parentValue, { data }, { prisma }, info) {
      return prisma.mutation.createCourse({ data }, info);
    },
    async upvote(parentValue, { id }, { prisma }, info) {
      const { title, author, description, topic, url, voteCount } = await prisma.query.course({
        where: { id }
      });
      const updatedCourse = { title, author, description, topic, url, voteCount };
      updatedCourse.voteCount += 1;
      return prisma.mutation.updateCourse({ data: updatedCourse, where: { id } }, info);
    },
    async downvote(parentValue, { id }, { prisma }, info) {
      const { title, author, description, topic, url, voteCount } = await prisma.query.course({
        where: { id }
      });
      const updatedCourse = { title, author, description, topic, url, voteCount };
      updatedCourse.voteCount -= 1;
      return prisma.mutation.updateCourse({ data: updatedCourse, where: { id } }, info);
    }
  }
};

export default CourseResolver;
