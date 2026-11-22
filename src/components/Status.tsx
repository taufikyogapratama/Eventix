type props = {
  status: "active" | "expired";
};

const Status = (props: props) => {
  return (
    <div
      className={`${props.status === "active" ? "bg-success-fg/40 text-success" : "bg-danger-fg/40 text-danger"}  inline py-1 px-3 rounded-2xl`}
    >
      {props.status}
    </div>
  );
};

export default Status;
