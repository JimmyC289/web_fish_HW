document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const submitButton = document.querySelector(".submit-button");
    const label = document.querySelector("label[for='email']");

    submitButton.addEventListener("click", function () {
        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            emailInput.classList.add("error");
            label.classList.add("error", "float");
// 加上浮起樣式
        } else {
            emailInput.classList.remove("error");
            label.classList.remove("error");

            // 確保只有有值時保留浮起
            if (emailValue !== "") {
                label.classList.add("float");
            } else {
                label.classList.remove("float");
            }
        }
    });

    // 即時移除錯誤樣式並保持浮起
    emailInput.addEventListener("input", function () {
        if (emailInput.value.trim() !== "") {
            emailInput.classList.remove("error");
            label.classList.remove("error");
        } else {
            label.classList.remove("float");
        }
    });
});
