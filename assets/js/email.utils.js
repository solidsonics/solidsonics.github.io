document.addEventListener("DOMContentLoaded", function () {
  var emailjsScript = document.createElement("script");
  emailjsScript.src =
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
  document.body.appendChild(emailjsScript);

  emailjsScript.onload = function () {
    emailjs.init("bu1taiOb_fxdGQPsq");
    var form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("service_3ftu4hx", "template_nf0ty7k", this).then(
          function (response) {
            // console.log("SUCCESS!", response.status, response.text);
            showModal("success", "Thank you for reaching out!");
          },
          function (error) {
            // console.log("FAILED...", error);
            showModal("error", "Oops, we've got some problems.");
          }
        );
      });
    }
  };
});

function showModal(type, message) {
  var modal = document.getElementById("modal");
  var icon = document.querySelector(".modal-icon");
  var messageParagraph = document.querySelector(".modal-message");
  var closeBtn = document.querySelector(".modal-close-btn");

  if (type === "success") {
    icon.className = "modal-icon fas fa-check-circle";
    icon.style.color = "green";
  } else if (type === "error") {
    icon.className = "modal-icon fas fa-times-circle";
    icon.style.color = "red";
  }

  messageParagraph.textContent = message;

  modal.style.display = "block";

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

document.querySelectorAll(".scroll-to-bottom").forEach(function (link) {
  link.addEventListener("click", function (e) {
    // 防止默认锚点跳转行为
    e.preventDefault();

    // 获取目标元素的id
    var targetId = this.getAttribute("href");
    var targetElement = document.querySelector(targetId);

    // 计算目标元素的位置
    var targetPosition = targetElement.getBoundingClientRect().top;
    var offsetPosition = targetPosition + window.pageYOffset - 100; // 可以减去额外的值，比如导航栏的高度

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
