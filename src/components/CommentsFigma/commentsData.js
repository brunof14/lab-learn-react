const randomDate = (beginDate = new Date(2022, 0, 28), endDate = new Date()) =>
  new Date(
    beginDate.getTime() +
      Math.random() * (endDate.getTime() - beginDate.getTime())
  );

export const api = {
  async getComments(size = 3) {
    const randomUsers = await (
      await fetch(
        `https://random-data-api.com/api/users/random_user?size=${size}`
      )
    ).json();

    return randomUsers.map(({ id, first_name, last_name }) => {
      return {
        id,
        author: {
          avatarUrl:
            "https://avatar-endpoint.herokuapp.com/api/?" + Math.random(),
          name: `${first_name} ${last_name}`,
          at: `@test-${id}`,
        },
        body: "Lorem ipsum dolor sit amet consectetur",
        createdAt: randomDate(),
      };
    });
  },
};
