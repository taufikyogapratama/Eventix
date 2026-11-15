const Dashboard = () => {
  return (
    <main className="pt-18">
      <h1>Ini Dashboard</h1>
      <p>hallo Halo</p>
      <form action="/auth/signout" method="post">
        <button className="button block" type="submit">
          Sign out
        </button>
      </form>
    </main>
  );
};

export default Dashboard;
