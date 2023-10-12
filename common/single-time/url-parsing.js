{
  console.time("split normal without spread");
  const url = "https://nextjs.org/docs/app/api-reference/edge";
  const domainname = url.split("/")[0];
  console.timeEnd("split normal without spread");
}
{
  console.time("split normal with spread");
  const url = "https://nextjs.org/docs/app/api-reference/edge";
  const [domainname] = url.split("/");
  console.timeEnd("split normal with spread");
}
{
  console.time("split with limit without spread");
  const url = "https://nextjs.org/docs/app/api-reference/edge";
  const domainname = url.split("/", 1)[0];
  console.timeEnd("split with limit without spread");
}
{
  console.time("split with limit with spread");
  const url = "https://nextjs.org/docs/app/api-reference/edge";
  const [domainname] = url.split("/", 1);
  console.timeEnd("split with limit with spread");
}
