const quotes = [
  {
    quote: "준비하지 않은 자는 기회가 와도 소용없다",
    author: "Alexis de Tocqueville",
  },
  {
    quote: "내일이란 오늘의 다른 이름일 뿐",
    author: "William Cuthbert Faulkner",
  },
  {
    quote: "강인한 의지 없이는 뛰어난 재능도 없다",
    author: "Honore de Balzac",
  },
  {
    quote: "불가능한 일을 해보는 것은 신나는 일이다",
    author: "Walter Elias Walt Disney",
  },
  {
    quote: "할 수 있다고 믿는 사람은 결국 그렇게 된다",
    author: "Charles de Gaulle",
  },
  {
    quote: "한번 포기하면 습관이 된다. 절대 포기하지 말아라.",
    author: "Michael Jeffrey Jordan",
  },
  {
    quote: "성공은 꿈꾸고, 믿고, 대담해지고, 실천하는 데서 오는 것이다",
    author: "John Dijulius III",
  },
  {
    quote: "삶은 당신이 만드는 것이다. 이전에도 그랬고 앞으로도 그럴 것이다.",
    author: "Grandma Moses",
  },
  {
    quote: "행운의 여신은 용기 있는 자를 좋아한다",
    author: "Virgil Aboloh",
  },
  {
    quote: "긴 인생은 충분히 좋지 않을 수도 있다, 그러나 좋은 인생은 충분히 길다.",
    author: "Benjamin Farnklin",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;