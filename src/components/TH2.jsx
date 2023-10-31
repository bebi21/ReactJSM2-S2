import React from "react";

export default function TH2() {
  return (
    <>
      <div class="container">
        <h1 class="heading">Xin chào các bạn!</h1>
      </div>
      <form>
        <label for="name" class="form-lable">
          Tên đăng nhập
        </label>
        <br />
        <input class="form-input" id="name" />
        <br />
        <button class="form-submit" type="submit">
          Đăng nhập
        </button>
      </form>
    </>
  );
}
