{
  console.time("split normal without spread");
  for (let i = 0; i < 10_000; i++) {
    const hostname = "_gh_sess=IAMASESSIONCOOKIE; path=/; secure; HttpOnly; SameSite=Lax";
    const host = hostname.split(";")[0];
  }
  console.timeEnd("split normal without spread");
}
{
  console.time("split normal with spread");
  for (let i = 0; i < 10_000; i++) {
    const hostname = "_gh_sess=IAMASESSIONCOOKIE; path=/; secure; HttpOnly; SameSite=Lax";
    const [host] = hostname.split(";");
  }
  console.timeEnd("split normal with spread");
}
{
  console.time("split with limit without spread");
  for (let i = 0; i < 10_000; i++) {
    const hostname = "_gh_sess=IAMASESSIONCOOKIE; path=/; secure; HttpOnly; SameSite=Lax";
    const host = hostname.split(";", 1)[0];
  }
  console.timeEnd("split with limit without spread");
}
{
  console.time("split with limit with spread");
  for (let i = 0; i < 10_000; i++) {
    const hostname = "_gh_sess=IAMASESSIONCOOKIE; path=/; secure; HttpOnly; SameSite=Lax";
    const [host] = hostname.split(";", 1);
  }
  console.timeEnd("split with limit with spread");
}