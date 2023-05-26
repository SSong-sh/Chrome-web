const quotes = [
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "Only I can change me life, no one can do it for me.",
      author: " Carol Burnett",
    },
    {
      quote: "Life is unfair, get used to it.",
      author: "Bill Gates",
    },
    {
      quote:
        "Life is a mountain. Your goal is to find your path, not to reach the top.",
      author: "Maxime Lagacé",
    },
    {
      quote:
        "All you need in this life is ignorance and confidence, then success is sure.",
      author: "Mark Twain",
    },
    {
      quote: "Despite the forecast, live like it’s spring.",
      author: "Lilly Pulitzer",
    },
    {
      quote: "Turn your wounds into wisdom.",
      author: "Oprah Gail Winfrey",
    },
    {
      quote: "If you would be loved, love and be lovable.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "Always bear in mind that your own resolution to succeed is more important than any other.",
      author: "Abraham Lincoln",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
  