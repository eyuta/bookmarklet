javascript: (() => {
  const getNodeByName = (name = "") => document.getElementsByName(name).item(0);
  const sleep = (sec) => new Promise((r) => setTimeout(r, sec * 1000));

  const setTime = () => {
    const startHourInput = getNodeByName("KNMTMRNGSTH");
    const startMinuteInput = getNodeByName("KNMTMRNGSTM");
    const endHourInput = getNodeByName("KNMTMRNGETH");
    const endMinuteInput = getNodeByName("KNMTMRNGETM");

    const hours = document.querySelectorAll("#h");
    const minutes = document.querySelectorAll("#M");

    const getHour = (node, lowerLimit, upperLimit, dummyHour) => {
      const val = parseInt(node?.innerHTML);
      const isInvalid = Boolean(!val || val < lowerLimit || val > upperLimit);
      return isInvalid ? dummyHour : val;
    };

    const startHour = getHour(hours[0], 9, 11, 9);
    const endHour = getHour(hours[1], 16, 19, 19);

    const startMinute = minutes[0]?.innerHTML || startHour;
    const endMinute = minutes[1]?.innerHTML || startMinute;

    startHourInput.value = startHour;
    startMinuteInput.value = startMinute;
    endHourInput.value = endHour;
    endMinuteInput.value = endMinute;
  };

  const setDairyArea = () => {
    const dailyAreaInput = getNodeByName("GI_COMBOBOX38_Seq0S");
    const IN_HOUSE = 2;
    dailyAreaInput.value = IN_HOUSE;
  };
  const setProject = () => document.querySelector(".pm-act-btn")?.click();

  const next = () => getNodeByName("btnNext1")?.click();
  const submission = () => getNodeByName("dSubmission1")?.click();

  const moveEmpDate = async () => {
    const MOVE_EMP_DATE = "4";
    const el = getNodeByName("move_emp_date");
    if (el && el.value !== MOVE_EMP_DATE) {
      el.value = MOVE_EMP_DATE;
      el.dispatchEvent(new Event("change"));
      await sleep(1);
    }
  };

  const main = async () => {
    await moveEmpDate();

    const isWorkday = !!getNodeByName("KNMTMRNGSTDI");
    const emptyProject =
      document.querySelector("#project-grid .cell-project-code > div")
        ?.innerText === "例) プロジェクトA > プロジェクトB > プロジェクトC";

    if (isWorkday) {
      setTime();
      setDairyArea();
      if (emptyProject) {
        setProject();
      }
    }
    await sleep(1);
    next();
    submission();
  };
  main();
})();
