const share = document.querySelector(".shareDiv");
const socialShare = document.querySelector(".socialShare");
socialShare.style.display = "none";

share.addEventListener("click", function () {
  if (socialShare.style.display == "none") socialShare.style.display = "flex";
  else socialShare.style.display = "none";
});