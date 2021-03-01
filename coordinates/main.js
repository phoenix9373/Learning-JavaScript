const target = document.querySelector(".target");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const tag = document.querySelector(".tag");
const lines = document.querySelectorAll(".line");

// 타겟 크기
const targetHalfWidth = target.offsetWidth / 2;
const targetHalfHeight = target.offsetHeight / 2;

document.addEventListener("mousemove", (e) => {
  const X = e.clientX;
  const Y = e.clientY;

  target.style.transform = `translate(${X - targetHalfWidth}px, ${
    Y - targetHalfHeight
  }px)`;
  horizontal.style.transform = `translateY(${Y}px)`;

  vertical.style.transform = `translateX(${X}px)`;

  tag.style.transform = `translate(${X + 30}px, ${Y + 30}px)`;

  tag.textContent = `${X}px, ${Y}px`;
});
