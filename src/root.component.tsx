export default function Root(props) {
  const style = {
    padding: "5%",
    border: "2px solid",
    background: "lightblue",
  };
  return (
    <div style={style}>
      <h3>Second Single SPA React APP {props.name}</h3>
      <button>Click</button>
    </div>
  );
}
