interface HeaderState {
    visibleFlagModal: boolean;
}
// Định nghĩa kiểu dữ liệu cho RootState
interface RootState {
  header: HeaderState;
  // Khai báo các module state khác nếu có
}

export default RootState;
