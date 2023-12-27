import styled from "@emotion/styled";
import React, { useState } from "react";
import {
  MenuTabDelete,
  MenuTabEdit,
  MenuTabStyle,
} from "../styles/menutabstyle";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import CreateEdit from "./CreateEdit";

const MenuTab = props => {
  const item = props.item;
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handlePopupToggle = () => {
    // setPopupOpen 함수를 사용하여 isPopupOpen 상태를 반전시킴
    setPopupOpen(true);
  };

  const handleClickEdit = () => {
    // 여기서 item을 넘겨야 해요.
    console.log("보자", item);
    // 얘가 item의 diaryId를 가져와서 navigate-> 페이지로 정보를 같이 들고가야댐
    navigate(`/edit/${item.diaryId}`);
  };

  const pk = props.pk;
  const handleClick = props.handleClick;
  const handleButtonClick = props.handleButtonClick;

  return (
    <MenuTabStyle>
      {props.type === 1 ? (
        <>
          <MenuTabEdit onClick={props.handleButtonClickEdit(item)}>
            <h3>수정하기</h3>
          </MenuTabEdit>
        </>
      ) : (
        <>
          <MenuTabEdit onClick={handleClickEdit} item={item}>
            <h3>수정하기</h3>
          </MenuTabEdit>
        </>
      )}
      {/* <MenuTabEdit onClick={handleClickEdit}>
        <h3>수정하기</h3>
      </MenuTabEdit> */}
      <MenuTabDelete
        onClick={() => {
          handleClick(pk);
        }}
      >
        <h3>삭제하기</h3>
      </MenuTabDelete>
    </MenuTabStyle>
  );
};

export default MenuTab;
