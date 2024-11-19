-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 08, 2023 lúc 04:37 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `banthuoc`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `Iddh` int(100) NOT NULL,
  `Ngxuat` date NOT NULL,
  `Soluong` int(100) NOT NULL,
  `Tonggia` int(100) NOT NULL,
  `Idgih` int(100) NOT NULL,
  `Idthuoc` int(100) NOT NULL,
  `Idnv` int(100) NOT NULL,
  `Idkh` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giohang`
--

CREATE TABLE `giohang` (
  `Idgih` int(100) NOT NULL,
  `Soluong` int(100) NOT NULL,
  `Tonggia` int(100) NOT NULL,
  `Idthuoc` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `Idkh` int(100) NOT NULL,
  `Hotenkh` varchar(100) NOT NULL,
  `Ngsinh` date NOT NULL,
  `Sdt` varchar(100) NOT NULL,
  `Diachi` varchar(1000) NOT NULL,
  `Ngtaotk` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `Idnv` int(100) NOT NULL,
  `Hotennv` varchar(100) NOT NULL,
  `Ngsinh` date NOT NULL,
  `Sdt` varchar(100) NOT NULL,
  `Diachi` varchar(1000) NOT NULL,
  `Ngbatdau` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhomkhachhang`
--

CREATE TABLE `nhomkhachhang` (
  `Idnhomkh` int(100) NOT NULL,
  `Tennhomkh` varchar(100) NOT NULL,
  `Soluongtv` int(100) NOT NULL,
  `Idkh` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhomnhanvien`
--

CREATE TABLE `nhomnhanvien` (
  `Idnhomnv` int(100) NOT NULL,
  `Tennhomnv` varchar(100) NOT NULL,
  `Soluongtv` int(100) NOT NULL,
  `Idnv` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhomthuoc`
--

CREATE TABLE `nhomthuoc` (
  `Idnhomth` int(100) NOT NULL,
  `Tennhomth` varchar(100) NOT NULL,
  `Soluong` int(100) NOT NULL,
  `Idthuoc` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhomtintuc`
--

CREATE TABLE `nhomtintuc` (
  `Idnhomtt` int(100) NOT NULL,
  `Tdnhomtt` varchar(1000) NOT NULL,
  `Soluong` int(100) NOT NULL,
  `Idtt` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `Idtk` int(100) NOT NULL,
  `User` varchar(100) NOT NULL,
  `Pass` varchar(100) NOT NULL,
  `Quyen` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thuoc`
--

CREATE TABLE `thuoc` (
  `Idthuoc` int(100) NOT NULL,
  `Tenthuoc` varchar(100) NOT NULL,
  `Duocchat` varchar(100) NOT NULL,
  `Soluong` int(100) NOT NULL,
  `Gia` int(100) NOT NULL,
  `Anhthuoc` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuc`
--

CREATE TABLE `tintuc` (
  `Idtt` int(100) NOT NULL,
  `Td` varchar(1000) NOT NULL,
  `Nd` mediumtext NOT NULL,
  `Tgdang` date NOT NULL,
  `Anhtt` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`Iddh`),
  ADD KEY `Idgih` (`Idgih`),
  ADD KEY `Idthuoc` (`Idthuoc`),
  ADD KEY `Idnv` (`Idnv`),
  ADD KEY `Idkh` (`Idkh`);

--
-- Chỉ mục cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`Idgih`),
  ADD KEY `Idthuoc` (`Idthuoc`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`Idkh`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`Idnv`);

--
-- Chỉ mục cho bảng `nhomkhachhang`
--
ALTER TABLE `nhomkhachhang`
  ADD PRIMARY KEY (`Idnhomkh`),
  ADD KEY `Idkh` (`Idkh`);

--
-- Chỉ mục cho bảng `nhomnhanvien`
--
ALTER TABLE `nhomnhanvien`
  ADD PRIMARY KEY (`Idnhomnv`),
  ADD KEY `Idnv` (`Idnv`);

--
-- Chỉ mục cho bảng `nhomthuoc`
--
ALTER TABLE `nhomthuoc`
  ADD PRIMARY KEY (`Idnhomth`),
  ADD KEY `Idthuoc` (`Idthuoc`);

--
-- Chỉ mục cho bảng `nhomtintuc`
--
ALTER TABLE `nhomtintuc`
  ADD PRIMARY KEY (`Idnhomtt`),
  ADD KEY `Idtt` (`Idtt`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`Idtk`);

--
-- Chỉ mục cho bảng `thuoc`
--
ALTER TABLE `thuoc`
  ADD PRIMARY KEY (`Idthuoc`);

--
-- Chỉ mục cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`Idtt`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`Idgih`) REFERENCES `giohang` (`Idgih`),
  ADD CONSTRAINT `donhang_ibfk_2` FOREIGN KEY (`Idthuoc`) REFERENCES `thuoc` (`Idthuoc`),
  ADD CONSTRAINT `donhang_ibfk_3` FOREIGN KEY (`Idnv`) REFERENCES `nhanvien` (`Idnv`),
  ADD CONSTRAINT `donhang_ibfk_4` FOREIGN KEY (`Idkh`) REFERENCES `khachhang` (`Idkh`);

--
-- Các ràng buộc cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD CONSTRAINT `giohang_ibfk_1` FOREIGN KEY (`Idthuoc`) REFERENCES `thuoc` (`Idthuoc`);

--
-- Các ràng buộc cho bảng `nhomkhachhang`
--
ALTER TABLE `nhomkhachhang`
  ADD CONSTRAINT `nhomkhachhang_ibfk_1` FOREIGN KEY (`Idkh`) REFERENCES `khachhang` (`Idkh`);

--
-- Các ràng buộc cho bảng `nhomnhanvien`
--
ALTER TABLE `nhomnhanvien`
  ADD CONSTRAINT `nhomnhanvien_ibfk_1` FOREIGN KEY (`Idnv`) REFERENCES `nhanvien` (`Idnv`);

--
-- Các ràng buộc cho bảng `nhomthuoc`
--
ALTER TABLE `nhomthuoc`
  ADD CONSTRAINT `nhomthuoc_ibfk_1` FOREIGN KEY (`Idthuoc`) REFERENCES `thuoc` (`Idthuoc`);

--
-- Các ràng buộc cho bảng `nhomtintuc`
--
ALTER TABLE `nhomtintuc`
  ADD CONSTRAINT `nhomtintuc_ibfk_1` FOREIGN KEY (`Idtt`) REFERENCES `tintuc` (`Idtt`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
