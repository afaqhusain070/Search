import React from "react";

const Hoc1 = () => {
  return <App Auth={Dashboard} />;
};

export default Hoc1;
function Dashboard() {
  return <h2>wellcome users</h2>;
}

const islgin = false;
function App({ Auth }) {
  if (islgin) {
    return <Auth />;
  }
  return (
    <>
      <div>login to continue</div>
    </>
  );
}
