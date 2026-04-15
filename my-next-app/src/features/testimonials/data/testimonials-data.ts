export interface Testimonial {
  id: string;
  authorName: string;
  authorInitials: string;
  authorLocation: string;
  rating: number;
  text: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    authorName: "Chị Thanh Lan",
    authorInitials: "TL",
    authorLocation: "TP. Hồ Chí Minh",
    rating: 5,
    text: "Yến sào Ngọc Thảo chất lượng thật sự. Từ ngày dùng đều đặn, sức khỏe của cả gia đình cải thiện rõ rệt, tổ yến làm sạch lông cực kỳ tỉ mỉ, chưng lên nở to và rất thơm.",
  },
  {
    id: "t2",
    authorName: "Anh Minh Hoàng",
    authorInitials: "MH",
    authorLocation: "Hà Nội",
    rating: 5,
    text: "Mua yến tinh chế ở đây hơn 5 năm rồi. Tổ yến nguyên sợi dày, chưng nở nhiều và dai, thơm ngon đúng chuẩn yến thật. Tin tưởng tuyệt đối triết lý minh bạch từ thương hiệu.",
  },
  {
    id: "t3",
    authorName: "Chị Hồng Nhung",
    authorInitials: "HN",
    authorLocation: "Đà Nẵng",
    rating: 5,
    text: "Đi công tác được bạn giới thiệu mua làm quà biếu, packaging cực kỳ sang trọng. Khách hàng và đối tác bên mình nhận quà khen nức nở. Chắc chắn sẽ gắn bó dài lâu cùng Ngọc Thảo.",
  }
];
