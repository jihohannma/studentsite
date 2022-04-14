

var progressBar = document.getElementById("progress"),
  percent = document.getElementsByClassName("progress-bar__percent")[0],
  percentCloned = percent.cloneNode(false),
  count = 1;

var appendPercent = function () {
  if (count > 12) {
    return;
  } else {
    progress.appendChild(percentCloned);
    percentCloned = percent.cloneNode(false);
    count++;
  }
};

setInterval(appendPercent, 250);
