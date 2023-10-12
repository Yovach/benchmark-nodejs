{
  console.time("split normal without spread");
  for (let i = 0; i < 50_000; i++) {
    const url = "https://nextjs.org/docs/app/api-reference/edge" + i;
    const domainname = url.split("/")[0];
  }
  console.timeEnd("split normal without spread");
}
{
  console.time("split normal with spread");
  for (let i = 0; i < 50_000; i++) {
    const url = "https://nextjs.org/docs/app/api-reference/edge" + i;
    const [domainname] = url.split("/");
  }
  console.timeEnd("split normal with spread");
}
{
  console.time("split with limit without spread");
  for (let i = 0; i < 50_000; i++) {
    const url = "https://nextjs.org/docs/app/api-reference/edge" + i;
    const domainname = url.split("/", 1)[0];
  }
  console.timeEnd("split with limit without spread");
}
{
  console.time("split with limit with spread");
  for (let i = 0; i < 50_000; i++) {
    const url = "https://nextjs.org/docs/app/api-reference/edge" + i;
    const [domainname] = url.split("/", 1);
  }
  console.timeEnd("split with limit with spread");
}
