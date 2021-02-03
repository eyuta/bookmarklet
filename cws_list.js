javascript: (() => {
  const trs = document.querySelectorAll("#APPROVALGRD > tbody > tr");

  trs.forEach((tr) => {
    const [startHour, endHour] = tr.querySelectorAll("#h");
    const [startMinute, endMinute] = tr.querySelectorAll("#M");

    const setTime = (el, suffix) => {
      const input = tr.querySelector(`input[name$='${suffix}']`);
      if (input && el) {
        input.value = el.innerText;
      }
    };

    setTime(startHour, "STH");
    setTime(startMinute, "STM");
    setTime(endHour, "ETH");
    setTime(endMinute, "ETM");

    const select = tr.querySelector("select");
    select && (select.value = 2);
  });

  document.getElementById("BTNCLC1")?.click();
})();
