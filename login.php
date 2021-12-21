<?php

$con = mysqli_connect('localhost', 'root', '','blog');

$txtt = $_POST['title'];
$txts = $_POST['category'];
$txtc = $_POST['content'];
$txta = $_POST['author'];

$db = mysqli_connect("localhost", "root", "", "blog");
$sql = "INSERT INTO `blogstable` (`title`, `category`,`content`, `author`, `status`, `img_data`) VALUES ('$txtt', '$txts','$txtc', '$txta', '$status', '$filename')";
mysqli_query($db, $sql);
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "<script> location.href='home.html'; </script>";
}
else
{
	echo "Are you a genuine visitor?";
	
}
?>
