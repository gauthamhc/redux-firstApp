import React from "react";
import { connect } from "react-redux";
import { buyIcecreams } from "../redux/index";
const IcecreamsShop = (props) => {
  return (
    <div>
      <h2>Number of IceCreams - {props.numberofIceCreams} </h2>
      <button onClick={props.buyIcecreams}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberofIceCreams: state.icecreams.numberOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecreams: () => dispatch(buyIcecreams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamsShop);
