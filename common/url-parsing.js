{
  const hostname = "https://nextjs.org/docs/app/api-reference/edge";
  console.time("split normal without spread");
  const domainname = hostname.split("/")[0];
  console.timeEnd("split normal without spread");
}
{
  const hostname = "https://nextjs.org/docs/app/api-reference/edge";
  console.time("split normal with spread");
  const [domainname] = hostname.split("/");
  console.timeEnd("split normal with spread");
}
{
  const hostname = "https://nextjs.org/docs/app/api-reference/edge";
  console.time("split with limit without spread");
  const domainname = hostname.split("/", 1)[0];
  console.timeEnd("split with limit without spread");
}
{
  const hostname = "https://nextjs.org/docs/app/api-reference/edge";
  console.time("split with limit with spread");
  const [domainname] = hostname.split("/", 1);
  console.timeEnd("split with limit with spread");
}
