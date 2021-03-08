function miroiModule() {
  var rtc = this;
  //formatters and parsers

  this.createPdf = function() {
    var doc = new jsPDF();
    var img = new Image();
    img.src = "img/myinterviewlogo.png";

    doc.addImage(img, "png", 10, 10, 50, 18);

    doc.setFontSize(14);
    doc.text(10, 30 + 10, "Number of Hires");
    doc.text(10, 30 + 15, "per month");
    doc.text(58, 30 + 10, String(rtc.app.hires_per_month));

    doc.text(10, 30 + 25, "Number of recruiters");
    doc.text(10, 30 + 30, "per hiring manager");
    doc.text(58, 30 + 25, String(rtc.app.recruiters_on_team));

    doc.text(10, 30 + 40, "Average recruiter");
    doc.text(10, 30 + 45, "annual salary ($)");
    doc.text(
      58,
      30 + 40,
      String(rtc.format_currency_round(rtc.app.recruiters_salary))
    );

    doc.text(10, 30 + 55, "Number of resume");
    doc.text(10, 30 + 60, "per month");
    doc.text(58, 30 + 55, String(rtc.app.resumes_per_job));

    doc.text(10, 30 + 70, "Number of mins of");
    doc.text(10, 30 + 75, "work per screening");
    doc.text(58, 30 + 70, String(rtc.app.hires_per_month));

    doc.text(10, 30 + 85, "Number of minutes");
    doc.text(10, 30 + 90, "per hire");
    doc.text(58, 30 + 85, String(rtc.app.total_minutes_per_hire));

    //rect(x, y, w, h, style)
    doc.setFillColor(70, 163, 249);
    doc.setTextColor(255, 255, 255);
    doc.setFontType("bold");
    doc.rect(84, 35, 55, 25, "F");
    doc.setFontSize(14);
    doc.text(
      rtc.format_currency_round(rtc.app.cost_per_hire),
      112,
      45,
      "center"
    );
    doc.setFontSize(10);
    doc.text("Current cost per hire", 112, 55, "center");

    doc.setFillColor(241, 92, 90);
    doc.rect(144, 35, 55, 25, "F");
    doc.setFontSize(14);
    doc.text(
      rtc.format_currency_round(rtc.app.myinterview_cost_per_hire),
      172,
      45,
      "center"
    );
    doc.setFontSize(10);
    doc.text("myInterview cost per hire", 172, 55, "center");

    doc.setFillColor(70, 163, 249);
    doc.rect(84, 65, 55, 25, "F");
    doc.setFontSize(14);
    doc.text(
      rtc.format_currency_round(rtc.app.cost_per_month),
      112,
      75,
      "center"
    );
    doc.setFontSize(10);
    doc.text("Current monthly cost", 112, 85, "center");

    doc.setFillColor(241, 92, 90);
    doc.rect(144, 65, 55, 25, "F");
    doc.setFontSize(14);
    doc.text(
      rtc.format_currency_round(rtc.app.myinterview_cost_per_month),
      172,
      75,
      "center"
    );
    doc.setFontSize(10);
    doc.text("myInterview monthly", 172, 85, "center");

    doc.setFillColor(94, 209, 189);
    doc.rect(83, 95, 116, 25, "F");
    doc.setFontSize(18);
    var savingStr =
      "You could save " +
      rtc.format_currency_round(
        rtc.parse_currency(rtc.app.myinterview_monthly_savings) * 12
      );
    doc.text(savingStr, 141, 109, "center");
    doc.setFontSize(10);
    doc.text("per year", 141, 113, "center");

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(22);
    doc.textWithLink("www.myinterview.com", 70, 290, {
      url: "http://www.myinterview.com"
    });

    doc.save("myinterview_savings.pdf");
  };

  this.format_currency = function(num) {
    num = parseFloat(num);
    num = num.toFixed(2);
    return "$".concat(num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
  };

  this.format_currency_round = function(num) {
    num = parseFloat(num);
    num = num.toFixed(0);
    return "$".concat(num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
  };

  this.parse_currency = function(str) {
    if (str) {
      str = str.replace(/[^\d.]/g, "");
    } else {
      str = "0";
    }
    return parseFloat(str);
  };
  return rtc;
}
window;
