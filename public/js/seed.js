window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor(Math.random() * 50 + 15);
  }

  const products = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      description:
        'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.',
      url: 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/1.jpg',
      productImageUrl: 'images/products/2657.jpg',
    },
    {
      id: 2,
      title: 'Pride and Prejudice',
      description:
        'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring.',
      url: 'https://www.goodreads.com/book/show/1885.Pride_and_Prejudice',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/2.jpg',
      productImageUrl: 'images/products/1885.jpg',
    },
    {
      id: 3,
      title: 'Gone with the Wind',
      description:
        "Scarlett O'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman's March to the Sea.",
      url: 'https://www.goodreads.com/book/show/18405.Gone_with_the_Wind',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/3.jpg',
      productImageUrl: 'images/products/18405.jpg',
    },
    {
      id: 4,
      title: 'The Picture of Dorian Gray',
      description:
        'Written in his distinctively dazzling manner, Oscar Wilde’s story of a fashionable young man who sells his soul for eternal youth and beauty is the author’s most popular work. The tale of Dorian Gray’s moral disintegration caused a scandal when it ﬁrst appeared in 1890, but though Wilde was attacked for the novel’s corrupting inﬂuence, he responded that there is, in fact, “a terrible moral in Dorian Gray.”',
      url: 'https://www.goodreads.com/book/show/5297.The_Picture_of_Dorian_Gray',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/4.jpg',
      productImageUrl: 'images/products/5297.jpg',
    },
  ];

  return { products: products };
})();
