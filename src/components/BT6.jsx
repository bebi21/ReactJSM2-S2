import React, { Component } from "react";

export default class BT6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  // tìm kiếm  các components  trong react.org
  /* `componentDidMount` là một trong những lifecycle method của React, nó được gọi sau khi component đã được gắn kết vào DOM. Đây là nơi bạn có thể thực hiện các tác vụ sau khi component đã "mount" (được thêm vào DOM) và sẵn sàng để tương tác với giao diện người dùng hoặc các phần tử khác trên trang.

Các tác dụng phổ biến của `componentDidMount` bao gồm:

1. **Khởi tạo dữ liệu:** Bạn có thể thực hiện các cuộc gọi mạng hoặc gửi yêu cầu API để tải dữ liệu mà component cần hiển thị.

2. **Thiết lập sự kiện:** Bạn có thể gắn kết các sự kiện (ví dụ: click, scroll, ...) để lắng nghe tương tác của người dùng.

3. **Thiết lập các bộ đếm thời gian:** Đây là nơi bạn có thể sử dụng `setInterval` hoặc `setTimeout` để cập nhật thông tin theo thời gian.

4. **Cập nhật state hoặc props:** Dựa vào tình huống cụ thể, bạn có thể muốn cập nhật state hoặc props của component sau khi nó đã được mount.

5. **Tương tác với các thư viện bên ngoài:** Nếu bạn đang sử dụng các thư viện bên ngoài React (ví dụ: D3.js, Chart.js), bạn có thể tương tác với chúng sau khi component đã mount.

`componentDidMount` rất hữu ích để thiết lập môi trường và chuẩn bị cho component trước khi nó tương tác với người dùng. */
  componentDidMount() {
    // Khi component được hiển thị lần đầu tiên
    this.interval = setInterval(this.updateTime, 1000); // Cập nhật thời gian mỗi giây
  }
  updateTime = () => {
    this.setState({ time: new Date().toLocaleTimeString() }); // Cập nhật thời gian trong state
  };

  render() {
    return (
      <>
        <h2>Xin chào các bạn</h2>
        <p>Bây giờ là {this.state.time} </p>
      </>
    );
  }
}
