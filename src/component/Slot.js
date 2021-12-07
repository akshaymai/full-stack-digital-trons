import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listOfSloats } from "../action/slot";
const Slot = ({ history }) => {
  const dispatch = useDispatch();

  const slotList = useSelector((state) => state.slots);
  const { sloats } = slotList;
  useEffect(() => {
    dispatch(listOfSloats());
  }, [dispatch]);

  const handleClick = (e) => {
    console.log("clicked", e.target.value);
    history.push(`/booking/${e.target.value}`);
  };
  const handleClickforedit = (e) => {
    history.push(`/edit/${e.target.value}`);
  };
  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          {sloats.map((item) => {
            return (
              <button
                value={item._id}
                className="login-btn"
                style={{
                  color: item.isBooked ? "red" : "",
                }}
                onClick={item.isBooked ? handleClickforedit : handleClick}
              >
                {item.slot_time}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Slot;
