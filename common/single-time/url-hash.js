{
  console.time("split normal without spread");
  const hostname = "https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#setting-cookies";
  const urlHash = hostname.split("#")[1];
  console.timeEnd("split normal without spread");
}
{
  console.time("split normal with spread");
  const hostname = "https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#setting-cookies";
  const [, urlHash] = hostname.split("#");
  console.timeEnd("split normal with spread");
}
{
  console.time("split with limit without spread");
  const hostname = "https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#setting-cookies";
  const urlHash = hostname.split("#", 1)[1];
  console.timeEnd("split with limit without spread");
}
{
  console.time("split with limit with spread");
  const hostname = "https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#setting-cookies";
  const [, urlHash] = hostname.split("#", 1);
  console.timeEnd("split with limit with spread");
}
