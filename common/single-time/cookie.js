{
  console.time("split normal without spread");
  const hostname = "_gh_sess=IAMASESSIONCOOKIE; path=/; secure; HttpOnly; SameSite=Lax";
  const host = hostname.split(";")[0];
  console.timeEnd("split normal without spread");
}
{
  console.time("split normal with spread");
  const hostname = "_gh_sess=IAMASESSIONCOOKIE; path=/; secure; HttpOnly; SameSite=Lax";
  const [host] = hostname.split(";");
  console.timeEnd("split normal with spread");
}
{
  console.time("split with limit without spread");
  const hostname = "_gh_sess=IAMASESSIONCOOKIE; path=/; secure; HttpOnly; SameSite=Lax";
  const host = hostname.split(";", 1)[0];
  console.timeEnd("split with limit without spread");
}
{
  console.time("split with limit with spread");
  const hostname = "_gh_sess=IAMASESSIONCOOKIE; path=/; secure; HttpOnly; SameSite=Lax";
  const [host] = hostname.split(";", 1);
  console.timeEnd("split with limit with spread");
}