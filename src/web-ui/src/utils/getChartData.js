const getChartData = (data) => {
  const output = {
    happyometer: null,
    aggregate: null,
  };

  const totals = {
    Colère: 0,
    Calme: 0,
    Heureux: 0,
    Triste: 0,
    Surpris: 0,
    total: 0,
  };

  data.results.forEach(function (result) {
    totals.angry += parseInt(result.angry, 10);
    totals.calm += parseInt(result.calm, 10);
    totals.happy += parseInt(result.happy, 10);
    totals.sad += parseInt(result.sad, 10);
    totals.surprised += parseInt(result.surprised, 10);
    totals.total =
      totals.angry + totals.calm + totals.happy + totals.sad + totals.surprised;
  });

  if (totals.total > 0) {
    output.happyometer = Math.floor(
      (totals.happy / totals.total) * 100 +
        (totals.surprised / totals.total) * 100
    );

    output.aggregate = {
      Colère: Math.floor((totals.angry / totals.total) * 100),
      Calme: Math.floor((totals.calm / totals.total) * 100),
      Heureux: Math.floor((totals.happy / totals.total) * 100),
      Triste: Math.floor((totals.sad / totals.total) * 100),
      Surpris: Math.floor((totals.surprised / totals.total) * 100),
    };
  }
  return output;
};

export default getChartData;
