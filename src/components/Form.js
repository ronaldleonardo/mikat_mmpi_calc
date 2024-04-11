//Have to click multiple times because of State changes delay
//Bold belum
//Design belum
//Testing

import { useState, useRef } from "react";
import Markdown from "react-markdown";
import "./form.css";

const Form = () => {
  const [repeat, setRepeat] = useState(true);
  const [skalaF, setSkalaF] = useState("");
  const [cryingForHelp, setCryingForHelp] = useState(false);
  const [liar, setLiar] = useState(false);
  const [halfliar, setHalfLiar] = useState(false);

  const [defensive, setDefensive] = useState("");
  const [spontan, setSpontan] = useState("");
  const [ulangan, setUlangan] = useState(false);
  const [konflik, setKonflik] = useState("");
  const [adaKonflik, setAdaKonflik] = useState(false);
  const [citraDiri, setCitraDiri] = useState("");
  const [skalaRe, setSkalaRe] = useState("");
  const [classRe, setClassRe] = useState("");
  const [classSt, setClassSt] = useState("");
  const [skalaSt, setSkalaSt] = useState("");
  const [skalaNol, setSkalaNol] = useState("");
  const [skalaDominan, setSkalaDominan] = useState("");
  const [sangatDominan, setSangatDominan] = useState(false);
  const [pasif, setPasif] = useState(false);

  const [skalaMinat, setSkalaMinat] = useState("");
  const [skalaKecemasanDitunjukkan, setKecemasanDitunjukkan] = useState("");
  const [skalaKecemasanTerselubung, setKecemasanTerselubung] = useState("");
  const [cemas, setCemas] = useState(false);
  const [profilLiar, setProfilLiar] = useState("");
  const [profilRepresi, setProfilRepresi] = useState("");
  const [represi, setRepresi] = useState(false);
  const [profilPr, setProfilPr] = useState("");
  const [pr, setPr] = useState(false);
  const [profilPsikopatik, setProfilPsikopatik] = useState("");
  const [ciriKepribadianPsikopatik, setCiriKepribadianPsikopatik] =
    useState("");
  const [psikopatik, setPsikopatik] = useState(0);
  const [profilParanoid, setProfilParanoid] = useState("");
  const [paranoid, setParanoid] = useState("");
  const [profilAll, setProfilAll] = useState("");
  const [profilEnd, setProfilEnd] = useState("");
  const [danCemas, setDanCemas] = useState("");
  const [skalaEs, setSkalaEs] = useState("");
  const [skalaEsCemasDominan, setSkalaEsCemasDominan] = useState("");
  const [skalaEsEnd, setSkalaEsEnd] = useState("");
  const [skalaEsPsikopatik, setSkalaEsPsikopatik] = useState("");
  const [skalaEsParanoid, setSkalaEsParanoid] = useState("");
  const [skalaEsTidakAman, setSkalaEsTidakAman] = useState("");
  const [skalaEsSt, setSkalaEsSt] = useState("");
  const [skalaEsHisteria, setSkalaEsHisteria] = useState("");

  const [skalaFisik, setSkalaFisik] = useState("");
  const [skalaOptimistik, setSkalaOptimistik] = useState("");
  const [skalaHisteria, setSkalaHisteria] = useState("");
  const [skalaSistematis, setSkalaSistematis] = useState("");
  const [skalaKejadianAneh, setSkalaKejadianAneh] = useState("");
  const [skalaEmosi, setSkalaEmosi] = useState("");

  //=================Skala Kepribadian===========================
  // SKALA 1 2 3
  const [kep123, setKep123] = useState("");
  // Cemas
  const [kepCemas, setKepCemas] = useState("");
  const [skalaEsAMasREnd, setSkalaEsAMasRend] = useState("");
  // Psikopatik
  const [kepPsikopatik, setKepPsikopatik] = useState("");
  // Responsibility
  const [kepRe, setKepRe] = useState("");
  // Dominan
  const [kepDominan, setKepDominan] = useState("");
  // Paranoid
  const [kepParanoid, setKepParanoid] = useState("");
  // Aman (pr)
  const [kepPr, setKepPr] = useState("");
  // Sistematis
  const [kepSistematis, setKepSistematis] = useState("");
  // Kejadian Aneh
  const [kepKejadianAneh, setKepKejadianAneh] = useState("");
  // Nol
  const [kepNol, setKepNol] = useState("");
  // Emosi
  const [kepEmosi, setKepEmosi] = useState("");
  // St
  const [kepSt, setKepSt] = useState("");
  // Konflik
  const [kepKonflik, setKepKonflik] = useState("");

  const [notesTambahan, setNotesTambahan] = useState("");
  const [result, setResult] = useState(false);

  const mmpi_calculate = (e) => {
    e.preventDefault();
    const pointJenisKelamin = parseInt(e.target[0].value);
    const pointUlangan = parseInt(e.target[1].value);

    const pointA = parseInt(e.target[2].value);
    const pointR = parseInt(e.target[3].value);
    const pointMas = parseInt(e.target[4].value);

    const pointEs = parseInt(e.target[5].value);

    const pointDy = parseInt(e.target[6].value);
    const pointDo = parseInt(e.target[7].value);

    const pointRe = parseInt(e.target[8].value);
    const pointPr = parseInt(e.target[9].value);
    const pointSt = parseInt(e.target[10].value);
    const pointCn = parseInt(e.target[11].value);

    const pointNotSure = parseInt(e.target[12].value);

    const pointL = parseInt(e.target[13].value);
    const pointF = parseInt(e.target[14].value);
    const pointK = parseInt(e.target[15].value);

    const point1 = parseInt(e.target[16].value);
    const point2 = parseInt(e.target[17].value);
    const point3 = parseInt(e.target[18].value);
    const point4 = parseInt(e.target[19].value);
    const point5 = parseInt(e.target[20].value);
    const point6 = parseInt(e.target[21].value);
    const point7 = parseInt(e.target[22].value);
    const point8 = parseInt(e.target[23].value);
    const point9 = parseInt(e.target[24].value);
    const point0 = parseInt(e.target[25].value);

    // RESULTS
    //==========Prompt Awal Start============
    //Crying for help
    if (pointF > pointL && pointF > pointK) {
      setCryingForHelp(true);
      setSkalaF(
        ` **Nampak adanya gambaran sedang membutuhkan pertolongan (*crying for help*).** (L=${pointL}, F=${pointF}, K=${pointK})`
      );
    } else {
      setCryingForHelp(false);
      setSkalaF(` (L=${pointL}, F=${pointF}, K=${pointK})`);
    }

    //Lie Factor
    //Yes or No
    if (pointL >= 70) {
      setLiar(true);
    } else {
      setLiar(false);
    }

    //Defensive
    if (pointK >= 65 && (liar || halfliar)) {
      setDefensive("**, serta tampak bersikap defensif terhadap tes.**");
    } else if (pointK >= 65 && !liar && !halfliar) {
      setDefensive("**, namun ia tampak bersikap defensif terhadap tes.**");
    } else if (pointK < 65 && (liar || halfliar)) {
      setDefensive(" meski ia tidak bersikap defensif terhadap tes.");
    } else if (pointK < 65 && !liar && !halfliar) {
      setDefensive(", serta ia tidak bersikap defensif terhadap tes.");
    }

    //Spontan
    if (liar) {
      setSpontan(
        "Subyek dapat menjawab semua soal dalam tes. Selama menjalani tes, Ia dalam keadaan tenang dan cermat dalam menjawab soal. **Ia tampil kurang spontan dan menampilkan dirinya sesuai harapan sosial**"
      );
    } else if (
      pointL >= 68 &&
      pointL <= 69 &&
      (represi || cryingForHelp || pointEs < 36)
    ) {
      setSpontan(
        "Subyek dapat menjawab semua soal dalam tes. Selama menjalani tes, Ia dalam keadaan tenang dan cermat dalam menjawab soal. **Namun ada kecenderungan menampilkan diri sesuai harapan sosial**"
      );
      setHalfLiar(true);
    } else {
      setSpontan(
        "Subyek dapat menjawab semua soal dalam tes. Selama menjalani tes, Ia dalam keadaan tenang dan cermat dalam menjawab soal. **Ia tampil spontan dan terbuka**"
      );
    }

    //Ulangan
    if (pointUlangan) {
      setUlangan(
        `**Ini merupakan tes ulangan karena tes pertama tidak bisa diinterpretasikan (L=....).** Dalam tes ulang ini, `
      );
    } else {
      setUlangan("");
    }
    //==========Prompt Awal End============

    //==========Prompt Profil Start============
    //Liar
    if (liar) {
      if (!cemas && !represi && !pr && !psikopatik && !paranoid) {
        setProfilLiar(
          ` **Meski harus diingat bahwa dalam tes ini subjek hanya menunjukkan sebagian dari dirinya saja, ia menampilkan diri sesuai harapan sosial. Perlu wawancara untuk mendapatkan gambaran kepribadian yang sesungguhnya.**`
        );
      } else {
        setProfilLiar(
          ` **serta harus diingat bahwa dalam tes ini subjek hanya menunjukkan sebagian dari dirinya saja, ia menampilkan diri sesuai harapan sosial. Perlu wawancara untuk mendapatkan gambaran kepribadian yang sesungguhnya.**`
        );
      }
    } else if (!liar) {
      setProfilLiar("");
    }

    //A+Mas -> Es>=46 Pr<=60  6<=70
    if (pointA > 53) {
      setKecemasanDitunjukkan(`**kecemasan yang ditunjukkan**`);
      setCemas(true);
    } else if (pointA > 50 && pointA <= 53) {
      if (pointEs < 46 || pointPr > 60 || point6 > 70) {
        setKecemasanDitunjukkan(`**kecemasan yang ditunjukkan**`);
        setCemas(true);
      }
    } else {
      setKecemasanDitunjukkan("");
    }

    if (pointMas > 53) {
      setKecemasanTerselubung(`**kecemasan yang terselubung**`);
      setCemas(true);
    } else if (pointMas > 50 && pointMas <= 53) {
      if (pointEs < 46 || pointPr > 60 || point6 > 70) {
        setKecemasanTerselubung(`**kecemasan yang terselubung**`);
        setCemas(true);
      }
    } else {
      setKecemasanTerselubung("");
    }

    if (pointA <= 50 && pointMas <= 50) {
      setCemas(false);
    } else if (
      ((pointA > 50 && pointA <= 53) || (pointMas > 50 && pointMas <= 53)) &&
      pointEs >= 46 &&
      pointPr <= 60 &&
      point6 <= 70
    ) {
      setCemas(false);
    }

    if (skalaKecemasanDitunjukkan && skalaKecemasanTerselubung) {
      setDanCemas("**dan** ");
    } else {
      setDanCemas("");
    }

    //R
    if (pointR > 60) {
      setProfilRepresi(
        `Saat ini **ia lebih banyak menyimpan sendiri permasalahan pribadinya dan banyak merepresi konflik.**`
      );
      setRepresi(true);
    } else if (pointR < 35) {
      setProfilRepresi(
        `Kemampuan subjek dalam merepresi konflik saat ini rendah.`
      );
    } else {
      setProfilRepresi("");
      setRepresi(false);
    }

    //Pr
    if (pointPr > 60) {
      setProfilPr(
        `Subyek **sedang merasa kurang/tidak aman berada di lingkungannya.**`
      );
      setKepPr(
        `Saat ini **Ia sedang merasa kurang/tidak aman berada di lingkungannya.** (6=${point6}, Pr=${pointPr})`
      );
      setPr(true);
    } else {
      setProfilPr("");
      setKepPr(
        `Saat ini Ia merasa aman berada di dalam lingkungannya.   (6=${point6}, Pr=${pointPr})`
      );
      setPr(false);
    }

    //4
    if (point4 > 65) {
      setProfilPsikopatik(
        `Didapatkan adanya peninggian skala 4, saat ini **ia sedang tidak ingin berada dalam lingkungan yang bersifat mengatur atau mendominasi.**`
      );
      setCiriKepribadianPsikopatik(
        `Subyek merupakan seseorang yang kurang/tidak suka berada dalam lingkungan yang kaku dan banyak aturan atau berhadapan dengan figur otoritas.`
      );
      setKepPsikopatik(
        `Sehari-hari ia berperilaku sesuai dengan norma dan aturan yang berlaku. Ia adalah seseorang yang kurang/tidak suka berada dalam lingkungan yang kaku dan banyak aturan atau berhadapan dengan figur otoritas.`
      );
      setPsikopatik(1);
    } else if (point4 < 35) {
      setCiriKepribadianPsikopatik(
        `**Subyek merupakan sosok yang cenderung kaku dan keras dalam memegang prinsip dan aturan yang ia pahami.** `
      );
      setKepPsikopatik(
        `Sehari-hari ia berperilaku sesuai dengan norma dan aturan yang berlaku. Ia cenderung kuat dan kaku dalam memegang prinsip dan aturan yang ia pahami. `
      );

      setPsikopatik(2);
    } else {
      setProfilPsikopatik("");
      setCiriKepribadianPsikopatik("");
      setKepPsikopatik(
        `Sehari-hari ia berperilaku sesuai dengan norma dan aturan yang berlaku.`
      );
      setPsikopatik(0);
    }
    //6
    if (point6 > 70) {
      setProfilParanoid(
        `**Subyek saat ini menunjukkan gambaran peninggian skala paranoid sehingga ia sangat berhati-hati dan sedang tidak percaya pada orang lain.**`
      );
      setKepParanoid(
        `**Subyek saat ini menunjukkan gambaran peninggian skala paranoid sehingga ia sangat berhati-hati dan sedang tidak percaya pada orang lain.** `
      );
      setParanoid(true);
    } else {
      setProfilParanoid("");
      setKepParanoid(
        `Profil kepribadian saat ini tidak sedang menunjukkan gambaran paranoid. `
      );
      setParanoid(false);
    }

    //ProfilAll
    setProfilEnd(
      ` (A=${pointA}, Mas=${pointMas}, A+Mas=${
        pointA + pointMas
      }, R=${pointR}, Pr=${pointPr}, 4=${point4}, 6=${point6})`
    );

    if (!cemas && !represi && !pr && !psikopatik && !paranoid) {
      setProfilAll(`Profil kepribadian dalam batas normal.`);
    } else {
      setProfilAll(
        `**Profil kepribadian menunjukkan adanya gambaran:** ${skalaKecemasanDitunjukkan} ${danCemas}${skalaKecemasanTerselubung} ${profilRepresi} ${profilPr} ${profilPsikopatik} ${profilParanoid}`
      );
    }

    // Kepribadian Ego strength Kecemasan Represi
    if (!cemas) {
      setKepCemas(
        `Saat ini tidak tampak adanya gambaran kecemasan, baik yang tampak maupun terselubung.`
      );
    } else {
      setKepCemas(
        `**Saat ini tampak adanya gambaran** ${skalaKecemasanDitunjukkan}${danCemas}${skalaKecemasanTerselubung}.`
      );
    }

    setSkalaEsAMasRend(
      `(Es=${pointEs}, A=${pointA}, Mas=${pointMas}, A+Mas=${
        pointA + pointMas
      }, R=${pointR})`
    );
    //==========Prompt Profil End============

    //==========Prompt Konflik Start============
    //Cn
    if (pointCn > 50 || cryingForHelp) {
      if (
        ((pointCn === 51 || pointCn === 52 || pointCn === 53) &&
          pointEs < 46) ||
        cryingForHelp
      ) {
        setKonflik(
          `**Saat ini didapatkan adanya stresor atau konflik di dalam dirinya.** (Cn=${pointCn})`
        );
        setKepKonflik(
          `**Saat ini didapatkan adanya stresor atau konflik di dalam dirinya.** (St=${pointSt}, Cn=${pointCn})`
        );
      } else if (
        (pointCn === 51 || pointCn === 52 || pointCn === 53) &&
        pointEs >= 46
      ) {
        setKonflik(
          `Saat ini tidak didapatkan adanya stresor atau konflik di dalam dirinya. (Cn=${pointCn})`
        );
        setKepKonflik(
          `Saat ini tidak didapatkan adanya stresor atau konflik di dalam dirinya. (St=${pointSt}, Cn=${pointCn})`
        );
      } else {
        setKonflik(
          `**Saat ini didapatkan adanya stresor atau konflik di dalam dirinya.** (Cn=${pointCn})`
        );
        setKepKonflik(
          `**Saat ini didapatkan adanya stresor atau konflik di dalam dirinya.** (St=${pointSt}, Cn=${pointCn})`
        );
      }
    } else {
      setKonflik(
        `Saat ini tidak didapatkan adanya stresor atau konflik di dalam dirinya. (Cn=${pointCn})`
      );
      setKepKonflik(
        `Saat ini tidak didapatkan adanya stresor atau konflik di dalam dirinya. (St=${pointSt}, Cn=${pointCn})`
      );
    }
    //==========Prompt Konflik End============

    //==========Prompt Citra Diri Start============
    if (liar) {
      setCitraDiri(
        "**Ia merupakan seseorang yang sangat menjaga tampilan citra dirinya. Ia kurang nyaman tampil apa adanya dan menampilkan diri sesuai harapan sosial.**"
      );
    } else {
      setCitraDiri("");
    }
    //==========Prompt Citra Diri End============

    //==========Prompt Responsibility and St Start============
    if (pointRe < 30) {
      setClassRe("yang rendah");
    } else if (pointRe >= 30 && pointRe < 40) {
      setClassRe("yang sedang");
    } else if (pointRe >= 40 && pointRe < 50) {
      setClassRe("yang cukup baik");
    } else if (pointRe >= 50 && pointRe < 60) {
      setClassRe("yang baik");
    } else if (pointRe >= 60) {
      setClassRe("yang tinggi");
    }

    if (pointSt < 40) {
      setClassSt("yang rendah");
    } else if (pointSt >= 40 && pointSt < 45) {
      setClassSt("yang sedang");
    } else if (pointSt >= 45 && pointSt < 50) {
      setClassSt("yang cukup baik");
    } else if (pointSt >= 50 && pointSt < 60) {
      setClassSt("yang baik");
    } else if (pointSt >= 60) {
      setClassSt("yang tinggi");
    }

    // Responsibility dan St combined (Liar)
    if (liar) {
      if (pointRe < 30 && pointSt < 40) {
        setSkalaRe(
          `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan rasa tanggung jawab sosial dan keinginan berkembang yang rendah. (Re=${pointRe}, St=${pointSt})`
        );
      } else if (
        pointRe >= 30 &&
        pointRe < 40 &&
        pointSt >= 40 &&
        pointSt < 45
      ) {
        setSkalaRe(
          `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan rasa tanggung jawab sosial dan keinginan berkembang yang sedang. (Re=${pointRe}, St=${pointSt})`
        );
      } else if (
        pointRe >= 40 &&
        pointRe < 50 &&
        pointSt >= 45 &&
        pointSt < 50
      ) {
        setSkalaRe(
          `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan rasa tanggung jawab sosial dan keinginan berkembang yang cukup baik. (Re=${pointRe}, St=${pointSt})`
        );
      } else if (
        pointRe >= 50 &&
        pointRe < 60 &&
        pointSt >= 50 &&
        pointSt < 60
      ) {
        setSkalaRe(
          `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan rasa tanggung jawab sosial dan keinginan berkembang yang baik. (Re=${pointRe}, St=${pointSt})`
        );
      } else if (pointRe >= 60 && pointSt >= 60) {
        setSkalaRe(
          `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan rasa tanggung jawab sosial dan keinginan berkembang yang tinggi. (Re=${pointRe}, St=${pointSt})`
        );
      } else {
        setSkalaRe(
          `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan rasa tanggung jawab sosial ${classRe} dan keinginan berkembang ${classSt}. (Re=${pointRe}, St=${pointSt})`
        );
      }
    }

    // Responsbility
    if (!liar && pointRe < 30) {
      setKepRe(
        `Kepedulian dan rasa tanggung jawab sosialnya bertaraf rendah. Ia masih mau terlibat aktivitas sosial ataupun menolong orang lain apabila merasa ada kepentingan baginya atau apabila dimintakan pertolongan terlebih dahulu. (4=${point4}. Re=${pointRe})`
      );
    } else if (!liar && pointRe >= 30 && pointRe < 40) {
      setKepRe(
        `Kepedulian sosial dan rasa tanggung jawabnya bertaraf sedang. Ia masih mau membantu orang lain bila dimintakan bantuan terlebih dahulu. (4=${point4}, Re=${pointRe})`
      );
    } else if (!liar && pointRe >= 40 && pointRe < 50) {
      setKepRe(
        `Ia memiliki kepedulian dan tanggung jawab sosial yang cukup baik. Ia mau membantu orang lain yang membutuhkan bantuannya. (4=${point4}, Re=${pointRe})`
      );
    } else if (!liar && pointRe >= 50 && pointRe < 60) {
      setKepRe(
        `Ia memiliki kepedulian dan tanggung jawab sosial yang baik. Ia peduli pada lingkungan dan mau membantu orang lain yang membutuhkan bantuannya. (4=${point4}, Re=${pointRe})`
      );
    } else if (!liar && pointRe >= 60) {
      setKepRe(
        `Ia seseorang yang memiliki kepedulian dan tanggung jawab sosial yang tinggi. Ia proaktif menolong orang yang membutuhkan pertolongannya. (4=${point4}, Re=${pointRe})`
      );
    }

    if (liar && pointRe < 30) {
      setKepRe(
        `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan rasa tanggung jawab sosialnya bertaraf rendah. (4=${point4}. Re=${pointRe})`
      );
    } else if (liar && pointRe >= 30 && pointRe < 40) {
      setKepRe(
        `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian sosial dan rasa tanggung jawabnya bertaraf sedang. (4=${point4}, Re=${pointRe})`
      );
    } else if (liar && pointRe >= 40 && pointRe < 50) {
      setKepRe(
        `Ia memiliki kepedulian dan tanggung jawab sosial yang cukup baik. Ia mau membantu orang lain yang membutuhkan bantuannya. (4=${point4}, Re=${pointRe})`
      );
    } else if (liar && pointRe >= 50 && pointRe < 60) {
      setKepRe(
        `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan tanggung jawab sosial yang baik. (4=${point4}, Re=${pointRe})`
      );
    } else if (liar && pointRe >= 60) {
      setKepRe(
        `Ia menggambarkan dirinya sebagai sosok yang memiliki kepedulian dan tanggung jawab sosial yang tinggi. (4=${point4}, Re=${pointRe})`
      );
    }

    if (!liar && pointRe < 30) {
      setSkalaRe(
        `Kepedulian dan rasa tanggung jawab sosialnya bertaraf rendah. Ia masih mau terlibat aktivitas sosial ataupun menolong orang lain apabila merasa ada kepentingan baginya atau apabila dimintakan pertolongan terlebih dahulu. (Re=${pointRe})`
      );
    } else if (!liar && pointRe >= 30 && pointRe < 40) {
      setSkalaRe(
        `Kepedulian sosial dan rasa tanggung jawabnya bertaraf sedang. Ia masih mau membantu orang lain bila dimintakan bantuan terlebih dahulu. (Re=${pointRe})`
      );
    } else if (!liar && pointRe >= 40 && pointRe < 50) {
      setSkalaRe(
        `Ia memiliki kepedulian dan tanggung jawab sosial yang cukup baik. Ia mau membantu orang lain yang membutuhkan bantuannya. (Re=${pointRe})`
      );
    } else if (!liar && pointRe >= 50 && pointRe < 60) {
      setSkalaRe(
        `Ia memiliki kepedulian dan tanggung jawab sosial yang baik. Ia peduli pada lingkungan dan mau membantu orang lain yang membutuhkan bantuannya. (Re=${pointRe})`
      );
    } else if (!liar && pointRe >= 60) {
      setSkalaRe(
        `Ia seseorang yang memiliki kepedulian dan tanggung jawab sosial yang tinggi. Ia proaktif menolong orang yang membutuhkan pertolongannya. (Re=${pointRe})`
      );
    }

    // St
    if (!liar && pointSt < 40) {
      setSkalaSt(
        `**Keinginan berkembangnya saat ini rendah.** Ia kurang menunjukkan motivasi dan ambisi untuk mencapai apa yang diinginkan dan cenderung puas dengan apa yang telah dicapainya. (St=${pointSt})`
      );
      setKepSt(
        `**Keinginan berkembangnya saat ini rendah.** Ia kurang menunjukkan motivasi dan ambisi untuk mencapai apa yang diinginkan dan cenderung puas dengan apa yang telah dicapainya. `
      );
    } else if (!liar && pointSt >= 40 && pointSt < 45) {
      setSkalaSt(
        `**Keinginan berkembangnya saat ini bertaraf sedang.** Ia masih mampu merancang masa depannya meski ia cenderung lekas puas dengan apa yang telah dicapainya. (St=${pointSt})`
      );
      setKepSt(
        `**Keinginan berkembangnya saat ini bertaraf sedang.** Ia masih mampu merancang masa depannya meski ia cenderung lekas puas dengan apa yang telah dicapainya. `
      );
    } else if (!liar && pointSt >= 45 && pointSt < 50) {
      setSkalaSt(
        `Keinginan berkembang dan ambisinya saat ini cukup baik, ia menunjukkan motivasi untuk pengembangan dirinya dan mampu merancang masa depannya. (St=${pointSt})`
      );
      setKepSt(
        `Keinginan berkembang dan ambisinya saat ini cukup baik, ia menunjukkan motivasi untuk pengembangan dirinya dan mampu merancang masa depannya. `
      );
    } else if (!liar && pointSt >= 50 && pointSt < 60) {
      setSkalaSt(
        `Keinginan berkembangnya saat ini baik, ia memiliki motivasi dan ambisi untuk mencapai apa yang diinginkan dan mampu merancang masa depannya. (St=${pointSt})`
      );
      setKepSt(
        `Keinginan berkembangnya saat ini baik, ia memiliki motivasi dan ambisi untuk mencapai apa yang diinginkan dan mampu merancang masa depannya. `
      );
    } else if (!liar && pointSt >= 60) {
      setSkalaSt(
        `Subjek merupakan seorang yang memiliki keinginan berkembang yang tinggi. Ia memiliki ambisi dan motivasi yang kuat untuk mendapatkan yang ia mau serta mampu merancang masa depan dan membuat rencana untuk meraihnya. (St=${pointSt})`
      );
      setKepSt(
        `Subjek merupakan seorang yang memiliki keinginan berkembang yang tinggi. Ia memiliki ambisi dan motivasi yang kuat untuk mendapatkan yang ia mau serta mampu merancang masa depan dan membuat rencana untuk meraihnya. `
      );
    }

    if (liar && pointSt < 40) {
      setKepSt(
        `Ia saat ini menggambarkan dirinya sebagai seseorang yang memiliki keinginan berkembang yang rendah. `
      );
    } else if (liar && pointSt >= 40 && pointSt < 45) {
      setKepSt(
        `Ia saat ini menggambarkan dirinya sebagai seseorang yang memiliki keinginan berkembang yang sedang. `
      );
    } else if (liar && pointSt >= 45 && pointSt < 50) {
      setKepSt(
        `Ia saat ini menggambarkan dirinya sebagai seseorang yang memiliki keinginan berkembang dan ambisinya yang cukup baik `
      );
    } else if (liar && pointSt >= 50 && pointSt < 60) {
      setKepSt(
        `Ia saat ini menggambarkan dirinya sebagai seseorang yang memiliki keinginan berkembang yang baik. `
      );
    } else if (liar && pointSt >= 60) {
      setKepSt(
        `Ia saat ini menggambarkan dirinya sebagai seseorang yang memiliki keinginan berkembang yang tinggi. `
      );
    }

    if (liar) {
      setSkalaSt();
    }
    //==========Prompt Responsibility and St End============

    //==========Prompt Kelompok dan Dominan Start============
    // Kelompok
    if (liar) {
      if (point0 < 46) {
        setSkalaNol(
          "Ia menggambarkan dirinya lebih senang bekerja dalam kelompok dibandingkan bekerja sendiri. "
        );
        setKepNol(
          "Ia menggambarkan dirinya lebih senang bekerja dalam kelompok dibandingkan bekerja sendiri. "
        );
      } else if (point0 >= 46 && point0 < 54) {
        setSkalaNol(
          "Ia menggambarkan dirinya dapat bekerja sendiri maupun bekerja dalam kelompok. "
        );
        setKepNol(
          "Ia menggambarkan dirinya dapat bekerja sendiri maupun bekerja dalam kelompok. "
        );
      } else if (point0 >= 54) {
        setSkalaNol(
          "Ia menggambarkan dirinya lebih senang bekerja sendiri dibandingkan bekerja dalam kelompok. "
        );
        setKepNol(
          "Ia menggambarkan dirinya lebih senang bekerja sendiri dibandingkan bekerja dalam kelompok. "
        );
      }
    } else if (!liar) {
      if (point0 < 46) {
        setSkalaNol(
          "Ia lebih senang bekerja dalam kelompok dibandingkan bekerja sendiri."
        );
        setKepNol(
          "Ia lebih senang bekerja dalam kelompok dibandingkan bekerja sendiri."
        );
      } else if (point0 >= 46 && point0 < 54) {
        setSkalaNol(
          "Ia merupakan seorang yang dapat bekerja sendiri maupun bekerja dalam kelompok. "
        );
        setKepNol(
          "Ia merupakan seorang yang dapat bekerja sendiri maupun bekerja dalam kelompok. "
        );
      } else if (point0 >= 54) {
        setSkalaNol(
          "Ia lebih senang bekerja sendiri dibandingkan bekerja dalam kelompok. "
        );
        setKepNol(
          "Ia lebih senang bekerja sendiri dibandingkan bekerja dalam kelompok. "
        );
      }
    }

    //Dominan

    if (
      pointDo - pointDy !== 0 &&
      pointDo - pointDy !== 1 &&
      pointDo - pointDy !== 2 &&
      pointDo - pointDy !== -1 &&
      pointDo - pointDy !== -2
    ) {
      setSangatDominan(false);
      setPasif(false);
      if (pointDo > pointDy && pointDy >= 40) {
        if (pointDo < 60) {
          setSkalaDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia cenderung bersikap dominan, namun ia masih dapat mempertimbangkan pendapat orang lain. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia cenderung bersikap dominan, namun ia masih dapat mempertimbangkan pendapat orang lain. (Do=${pointDo}, Dy=${pointDy})`
          );
          setSangatDominan(false);
        } else if (pointDo >= 60) {
          setSkalaDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia bersikap dominan, namun ia masih dapat mempertimbangkan pendapat orang lain. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia bersikap dominan, namun ia masih dapat mempertimbangkan pendapat orang lain. (Do=${pointDo}, Dy=${pointDy})`
          );
          setSangatDominan(true);
        }
      } else if (pointDo > pointDy && pointDy < 40) {
        setSangatDominan(false);
        setPasif(false);
        if (pointDy === 39) {
          if (pointEs >= 60 && pointRe >= 60) {
            setSkalaDominan(
              `Di dalam pergaulan dan pengambilan keputusan, ia bersikap cenderung dominan, namun ia masih dapat mempertimbangkan pendapat orang lain.(0=${point0}, Do=${pointDo}, Dy=${pointDy})`
            );
            setKepDominan(
              `Di dalam pergaulan dan pengambilan keputusan, ia bersikap cenderung dominan, namun ia masih dapat mempertimbangkan pendapat orang lain.(Do=${pointDo}, Dy=${pointDy})`
            );
            setSangatDominan(false);
          } else {
            setSkalaDominan(
              `Di dalam kelompok, ia dominan dan ada kecenderungan keras dalam berpendapat serta kurang dapat mempertimbangkan pendapat orang lain. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
            );
            setKepDominan(
              `Di dalam kelompok, ia dominan dan ada kecenderungan keras dalam berpendapat serta kurang dapat mempertimbangkan pendapat orang lain. (Do=${pointDo}, Dy=${pointDy})`
            );
            setSangatDominan(true);
          }
        } else if (pointDy < 39 && pointDo < 60) {
          setSkalaDominan(
            `Di dalam kelompok, ia dominan dan keras dalam berpendapat serta kurang dapat mempertimbangkan pendapat orang lain. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam kelompok, ia dominan dan keras dalam berpendapat serta kurang dapat mempertimbangkan pendapat orang lain. (Do=${pointDo}, Dy=${pointDy})`
          );
          setSangatDominan(true);
        } else if (pointDy < 39 && pointDo >= 60) {
          setSkalaDominan(
            `Di dalam kelompok, ia sangat dominan dan keras dalam berpendapat serta kurang dapat mempertimbangkan pendapat orang lain. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam kelompok, ia sangat dominan dan keras dalam berpendapat serta kurang dapat mempertimbangkan pendapat orang lain. (Do=${pointDo}, Dy=${pointDy})`
          );
          setSangatDominan(true);
        }
      } else if (pointDo < pointDy && pointDo >= 40) {
        setSangatDominan(false);
        setPasif(true);
        if (pointDy < 60) {
          setSkalaDominan(
            `Di dalam pergaulan yang baru atau belum dikenalnya, ia cenderung bersikap pasif dan membiarkan orang lain yang membuat keputusan, meski ia masih dapat mengambil keputusan apabila diminta atau diperlukan.(0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam pergaulan yang baru atau belum dikenalnya, ia cenderung bersikap pasif dan membiarkan orang lain yang membuat keputusan, meski ia masih dapat mengambil keputusan apabila diminta atau diperlukan.(Do=${pointDo}, Dy=${pointDy})`
          );
          setSangatDominan(false);
        } else if (pointDy >= 60) {
          setSkalaDominan(
            `Di dalam pergaulan yang baru atau belum dikenalnya, ia bersikap pasif dan membiarkan orang lain yang membuat keputusan dan tidak dapat mengambil keputusan apabila diminta atau diperlukan. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam pergaulan yang baru atau belum dikenalnya, ia bersikap pasif dan membiarkan orang lain yang membuat keputusan dan tidak dapat mengambil keputusan apabila diminta atau diperlukan. (Do=${pointDo}, Dy=${pointDy})`
          );
          setSangatDominan(false);
        }
      } else if (pointDo < pointDy && pointDo < 40) {
        setSangatDominan(false);
        setPasif(true);
        setSkalaDominan(
          `Di dalam pergaulan yang baru atau belum dikenalnya, ia bersikap pasif dan membiarkan orang lain yang membuat keputusan dan tidak dapat mengambil keputusan apabila diminta atau diperlukan. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
        );
        setKepDominan(
          `Di dalam pergaulan yang baru atau belum dikenalnya, ia bersikap pasif dan membiarkan orang lain yang membuat keputusan dan tidak dapat mengambil keputusan apabila diminta atau diperlukan. (Do=${pointDo}, Dy=${pointDy})`
        );
      }
    } else {
      setSangatDominan(false);
      setPasif(false);
      if (pointPr <= 60 && point6 <= 70) {
        setSkalaDominan(
          `Di dalam pergaulan dan pengambilan keputusan, ia mampu menempatkan diri kapan harus bersikap dominan dan kapan harus bersikap pasif. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
        );
        setKepDominan(
          `Di dalam pergaulan dan pengambilan keputusan, ia mampu menempatkan diri kapan harus bersikap dominan dan kapan harus bersikap pasif. (Do=${pointDo}, Dy=${pointDy})`
        );
      } else if (pointPr > 60 || point6 > 70) {
        if (pointDo > pointDy) {
          setSkalaDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia cenderung bersikap dominan karena ia cenderung berhati-hati dan takut salah/disalahkan (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia cenderung bersikap dominan karena ia cenderung berhati-hati dan takut salah/disalahkan (Do=${pointDo}, Dy=${pointDy})`
          );
        } else if (pointDo < pointDy) {
          setSkalaDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia bersikap pasif dan membiarkan orang lain yang membuat keputusan karena ia cenderung berhati-hati dan takut salah/disalahkan (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia bersikap pasif dan membiarkan orang lain yang membuat keputusan karena ia cenderung berhati-hati dan takut salah/disalahkan (Do=${pointDo}, Dy=${pointDy})`
          );
          setPasif(true);
        } else if (pointDo === pointDy) {
          setSkalaDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia mampu menempatkan diri kapan harus bersikap dominan dan kapan harus bersikap pasif. (0=${point0}, Do=${pointDo}, Dy=${pointDy})`
          );
          setKepDominan(
            `Di dalam pergaulan dan pengambilan keputusan, ia mampu menempatkan diri kapan harus bersikap dominan dan kapan harus bersikap pasif. (Do=${pointDo}, Dy=${pointDy})`
          );
        }
      }
    }
    //==========Prompt Kelompok dan Dominan End============

    //==========Prompt Minat Start============
    if (point5 >= 46 && point5 <= 54) {
      setSkalaMinat(
        `Minat, kegiatan atau hobinya seimbang antara aktivitas yang membutuhkan pemikiran mendalam dan kehalusan/ketelitian dengan aktivitas yang membutuhkan kecekatan motorik dan bersifat kompetitif. (5=${point5})`
      );
    }

    if (pointJenisKelamin === 1) {
      if (point5 < 46) {
        setSkalaMinat(
          `Minat, kegiatan, atau hobinya lebih pada aktivitas yang membutuhkan kecekatan motorik dan bersifat kompetitif dibandingkan aktivitas yang membutuhkan pemikiran mendalam dan kehalusan/ketelitian. (5=${point5})`
        );
      } else if (point5 > 54 && point5 <= 70) {
        setSkalaMinat(
          `Minat, kegiatan, atau hobinya lebih pada aktivitas yang membutuhkan pemikiran mendalam dan kehalusan/ketelitian dibandingkan aktivitas yang membutuhkan kecekatan motorik dan bersifat kompetitif. (5=${point5})`
        );
      } else if (point5 > 70) {
        setSkalaMinat(
          `Subjek merupakan seorang yang minat, kegiatan, atau hobinya lebih pada aktivitas yang membutuhkan pemikiran mendalam dan kehalusan/ketelitian dan tidak menyukai aktivitas yang membutuhkan kecekatan motorik dan bersifat kompetitif. (5=${point5})`
        );
      }
    }

    if (pointJenisKelamin === 0) {
      if (point5 < 46) {
        setSkalaMinat(
          `Minat, kegiatan, atau hobinya lebih pada aktivitas yang membutuhkan pemikiran mendalam dan kehalusan/ketelitian dibandingkan aktivitas yang membutuhkan kecekatan motorik dan bersifat kompetitif. (5=${point5})`
        );
      } else if (point5 > 54 && point5 <= 70) {
        setSkalaMinat(
          `Minat, kegiatan, atau hobinya lebih pada aktivitas yang membutuhkan kecekatan motorik dan bersifat kompetitif dibandingkan aktivitas yang membutuhkan pemikiran mendalam dan kehalusan/ketelitian. (5=${point5})`
        );
      } else if (point5 > 70) {
        setSkalaMinat(
          `Subjek merupakan seorang yang tidak menyukai peran dan aktivitas tradisional wanita. Minat, kegiatan, atau hobinya lebih pada aktivitas yang membutuhkan kecekatan motorik dan bersifat kompetitif. Ia kurang menyukai aktivitas yang membutuhkan pemikiran mendalam dan kehalusan/ketelitian. (5=${point5})`
        );
      }
    }
    //==========Prompt Minat End============

    //==========Prompt Ego Strength Start============
    setSkalaEsEnd(`(Es=${pointEs})`);

    if (pointEs < 36) {
      setSkalaEs(
        `Daya tahan mentalnya **bertaraf rendah,** saat ini ia kurang/tidak mampu menghadapi tekanan atau kritikan yang ditujukan kepadanya.`
      );
    } else if (pointEs >= 36 && pointEs <= 45) {
      setSkalaEs(
        `Daya tahan mentalnya **bertaraf sedang,** saat ini ia masih mampu menghadapi tekanan atau kritik yang bertaraf sedang yang tertuju padanya.`
      );
    } else if (pointEs >= 46 && pointEs <= 59) {
      setSkalaEs(
        `Daya tahan mentalnya baik, ia mampu menghadapi tekanan atau kritik yang tertuju padanya.`
      );
    } else if (pointEs >= 60) {
      setSkalaEs(
        `Daya tahan mentalnya kuat, ia mampu menghadapi tekanan atau kritik yang tertuju padanya. **Namun dalam situasi tekanan, ia cenderung keras dalam mempertahankan pendapatnya.**`
      );
    }

    //Pick and choose Es
    //Es Cemas && Dominan
    if (cemas) {
      if (sangatDominan && !pasif) {
        setSkalaEsCemasDominan(
          `**Dalam situasi tekanan, ia cenderung terpengaruh emosinya dan menjadi keras karena cemas dan takut salah.** (A=${pointA}, Mas=${pointMas}, A+Mas=${
            pointA + pointMas
          }, Do=${pointDo}, Dy=${pointDy})`
        );
      } else if (pasif && !sangatDominan) {
        setSkalaEsCemasDominan(
          `**Dalam situasi tekanan, ia cenderung terpengaruh emosinya dan menjadi pasif karena cemas dan takut salah.** (A=${pointA}, Mas=${pointMas}, A+Mas=${
            pointA + pointMas
          }, Do=${pointDo}, Dy=${pointDy})`
        );
      } else {
        setSkalaEsCemasDominan(
          `**Dalam situasi penuh tekanan, ia cenderung menunjukkan gambaran kecemasan.**(A=${pointA}, Mas=${pointMas}, A+Mas=${
            pointA + pointMas
          })`
        );
      }
    } else if (!cemas && sangatDominan) {
      setSkalaEsCemasDominan(
        `**Dalam situasi tekanan, ia cenderung keras dalam mempertahankan pendapatnya.** (Do=${pointDo}, Dy=${pointDy})`
      );
    } else if (!cemas && pasif) {
      setSkalaEsCemasDominan(
        `**Dalam situasi penuh tekanan, ia cenderung memilih untuk pasif dan menghindari konflik.** (Do=${pointDo}, Dy=${pointDy})`
      );
    }

    //Es Skala 4 / psikopatik
    if (psikopatik === 1) {
      setSkalaEsPsikopatik(
        `Saat berhadapan dengan situasi yang kaku dan penuh aturan, ia **cenderung dapat menunjukan perilaku menentang** yang tidak sesuai norma atau nilai yang ada. (4=${point4})`
      );
    } else if (psikopatik === 2) {
      setSkalaEsPsikopatik(
        `Dalam situasi penuh tekanan, ia cenderung keras dan kaku dalam mempertahankan aturan dan nilai yang ia pahami. Pada situasi baru yang belum ia kuasai, Ia **cenderung butuh waktu** dan ada kecenderungan kesulitan dalam menghadapi situasi yang membutuhkan fleksibilitas berpikir dan situasi yang membutuhkan pengambilan putusan yang cepat. (4=${point4})`
      );
    } else if (psikopatik === 0) {
      setSkalaEsPsikopatik("");
    }

    //Es Skala 6 / paranoid
    if (paranoid) {
      setSkalaEsParanoid(
        `Namun dalam situasi tekanan, ia **cenderung berhati-hati dan merasa tidak aman** terhadap lingkungan serta menghindari konflik. (6=${point6})`
      );
    } else if (!paranoid) {
      setSkalaEsParanoid("");
    }

    //Es Pr / Tidak aman
    if (pr) {
      setSkalaEsTidakAman(
        `Dalam situasi tekanan, ia cenderung berhati-hati dan merasa kurang aman terhadap lingkungan. (Pr=${pointPr})`
      );
    } else if (!pr) {
      setSkalaEsTidakAman("");
    }

    //Es St rendah
    if (pointSt < 40) {
      setSkalaEsSt(
        `Dalam situasi penuh tekanan ia cenderung mudah terpengaruh emosinya dan memengaruhi kepekaannya dalam berelasi sosial. (St=${pointSt})`
      );
    } else if (pointSt >= 40) {
      setSkalaEsSt("");
    }

    //Es Skala 3 / Histeria
    if (point3 > 70) {
      setSkalaEsHisteria(
        `Dalam situasi tekanan, ia cenderung menampilkan tanda-tanda histeria dan membutuhkan afeksi dari orang di sekitarnya. (3=${point3})`
      );
    } else if (point3 <= 70) {
      setSkalaEsHisteria("");
    }

    //==========Prompt Ego Strength End============

    //==========Prompt Lain-lain Start============
    //Kepribadian 123
    if (point1 > 70 || point2 > 70 || point2 < 30 || point3 > 70) {
      if (point1 > 70 && point2 <= 70 && point2 >= 30 && point3 <= 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan keluhan fisik.** Ia tidak menampilkan tanda-tanda depresi, maupun tanda-tanda histeria. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      }
      //========
      else if (point1 > 70 && point2 > 70 && point3 <= 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan keluhan fisik dan tanda-tanda depresi.** Ia tidak menampilkan tanda-tanda histeria. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      } else if (point1 > 70 && point2 < 30 && point3 <= 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan keluhan fisik dan tanda-tanda sedang optimistik.** Ia tidak menampilkan tanda-tanda histeria. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      } else if (point1 > 70 && point2 <= 70 && point2 >= 30 && point3 > 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan keluhan fisik dan tanda-tanda histeria.** Ia saat ini tidak sedang menampilkan tanda-tanda depresi. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      }
      //========
      else if (point1 <= 70 && point2 <= 70 && point2 >= 30 && point3 > 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan tanda-tanda histeria.** Ia saat ini tidak sedang menampilkan keluhan fisik maupun tanda-tanda depresi. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      } else if (point1 <= 70 && point2 > 70 && point3 > 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan tanda-tanda depresi dan tanda-tanda histeria.** Ia saat ini tidak sedang menampilkan keluhan fisik. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      } else if (point1 <= 70 && point2 < 30 && point3 > 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan tanda-tanda sedang optimistik dan tanda-tanda histeria.** Ia saat ini tidak sedang menampilkan keluhan fisik. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      } else if (point1 <= 70 && point2 < 30 && point3 <= 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan tanda-tanda sedang optimistik.** Ia tidak menampilkan keluhan fisik, maupun tanda tanda histeria. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      } else if (point1 <= 70 && point2 > 70 && point3 <= 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan tanda-tanda depresi.** Ia tidak menampilkan keluhan fisik, maupun tanda tanda histeria. (1=${point1}, 2=${point2}, 3=${point3})`
        );
      }
      //========
      else if (point1 > 70 && point2 > 70 && point3 > 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan keluhan-keluhan fisik, tanda-tanda depresi, serta tanda-tanda histeria.** (1=${point1}, 2=${point2}, 3=${point3})`
        );
      } else if (point1 > 70 && point2 < 30 && point3 > 70) {
        setKep123(
          `Subjek saat ini sedang **menampilkan keluhan-keluhan fisik, tanda-tanda sedang optimistik, serta tanda-tanda histeria.** (1=${point1}, 2=${point2}, 3=${point3})`
        );
      }
    } else {
      setKep123(
        `Subjek saat ini tidak sedang menampilkan keluhan fisik, tanda-tanda depresi, maupun tanda-tanda histeria. (1=${point1}, 2=${point2}, 3=${point3})`
      );
    }

    //1
    if (point1 > 70) {
      setSkalaFisik(
        `Subjek saat ini sedang **menampilkan keluhan-keluhan fisik jika berada dalam tekanan.** (1=${point1})`
      );
    } else {
      setSkalaFisik("");
    }

    //2
    if (point2 < 30) {
      if (point9 > 70) {
        setSkalaOptimistik(
          `Saat ini, ia **cenderung dalam kondisi optimistik dengan ada kecurigaan bipolar.**(2=${point2}, 9=${point9})`
        );
      } else {
        setSkalaOptimistik(
          `Saat ini, ia **cenderung dalam kondisi optimistik.** (2=${point2})`
        );
      }
    } else if (point2 > 70) {
      setSkalaOptimistik(
        `Subjek saat ini sedang **menampilkan tanda-tanda depresi.** (2=${point2})`
      );
    } else {
      setSkalaOptimistik("");
    }

    //3
    if (point3 > 70) {
      setSkalaHisteria(
        `Subjek saat ini sedang **menampilkan tanda-tanda histeria.** (3=${point3})`
      );
    } else {
      setSkalaHisteria("");
    }

    //7
    if (point7 > 70) {
      setSkalaSistematis(
        `Profil kepribadian saat ini sedang menunjukkan gambaran subjek sedang kurang dapat berpikir jernih dan sistematis. (7=${point7})`
      );
      setKepSistematis(
        `Saat ini Ia menunjukkan gambaran sedang kurang dapat berpikir jernih dan sistematis. `
      );
    } else {
      setSkalaSistematis("");
      setKepSistematis(
        `Saat ini dalam pengambilan keputusan, ia dapat berpikir jernih dan sistematis. `
      );
    }

    //8
    if (point8 > 70) {
      setSkalaKejadianAneh(
        `[JARANG DIBUNYIKAN] Subjek pernah mengalami kejadian aneh dan tidak masuk akal. (8=${point8})`
      );
      setKepKejadianAneh(
        `Ia pernah mengalami kejadian aneh dan tidak masuk akal. (7=${point7}, 8=${point8})`
      );
    } else {
      setSkalaKejadianAneh("");
      setKepKejadianAneh(
        `Ia tidak pernah mengalami peristiwa yang tidak masuk akal. (7=${point7}, 8=${point8})`
      );
    }

    //9
    if (point9 > 70) {
      setSkalaEmosi(
        `Profil kepribadian saat ini sedang menunjukkan **gambaran peninggian skala hipomanik** (subjek tampak memiliki energi dan ide berlebih sehingga terkesan kurang fokus). (9=${point9})`
      );
      setKepEmosi(
        `Ia saat ini sedang menunjukkan **gambaran peninggian skala hipomanik** (ia tampak memiliki energi dan ide berlebih sehingga terkesan kurang fokus).(0=${point0}, 9=${point9})`
      );
    } else if (point9 > 60 && point9 <= 70) {
      setSkalaEmosi(
        `Subjek memiliki ekspresi emosi cenderung lebih menonjol.(9=${point9})`
      );
      setKepEmosi(
        `Ia memiliki ekspresi emosi cenderung lebih menonjol. (0=${point0}, 9=${point9})`
      );
    } else if (point9 > 45 && point9 <= 60) {
      setSkalaEmosi(
        `Subjek memiliki ekpresi emosi terjaga dan seimbang dengan rasionya.(9=${point9})`
      );
      setKepEmosi(
        `Ia memiliki ekpresi emosi terjaga dan seimbang dengan rasionya. (0=${point0}, 9=${point9})`
      );
    } else if (point9 < 45) {
      setSkalaEmosi(
        `Subjek sedang lelah atau energi terbatas saat mengisi tes.(9=${point9})`
      );
      setKepEmosi(
        `Ia sedang lelah atau energi terbatas saat mengisi tes. (0=${point0}, 9=${point9})`
      );
    }
    //==========Notes Tambahan Start============
    if (cryingForHelp && !represi && !pr && !paranoid && !adaKonflik) {
      setNotesTambahan(
        "NOTES: Dapat dipertimbangkan bahwa 'Crying For Help' dalam kasus ini disebabkan karena tekanan saat tes dan bukan akibat konflik, sehingga 'Crying For Help' dapat dijadikan normal dan 'konflik' tetap dibiarkan normal"
      );
    } else {
      setNotesTambahan("");
    }

    //==========Notes Tambahan End==============
    //==========Prompt Lain-lain Emd============
    //debug
    console.log("mmpi calculate");
    console.log(profilAll);
  };

  //===========Janky Multi Clicker fix==========
  const buttonRef = useRef(null);
  const mmpi_calculate_multiple = (e) => {
    e.preventDefault();
    mmpi_calculate(e);

    if (repeat) {
      setResult(true);
      const timer = setTimeout(() => {
        buttonRef.current.click();
      }, 20);
      const timer2 = setTimeout(() => {
        buttonRef.current.click();
      }, 40);
      const timer3 = setTimeout(() => {
        buttonRef.current.click();
      }, 60);
      const timer4 = setTimeout(() => {
        buttonRef.current.click();
      }, 80);
      const timer5 = setTimeout(() => {
        buttonRef.current.click();
      }, 100);

      // ====== Removing list marker if empty ======
      const timer6 = setTimeout(() => {
        const itemsLi = document.querySelectorAll("li");
        for (const item of itemsLi) {
          if (!item.textContent.trim()) {
            item.style.display = "none";
          } else if (item.textContent.trim()) {
            item.style.display = "";
          }
        }
      }, 120);
      // ====== Removing list marker end ========
      // ====== Removing list marker if empty ======
      const timer7 = setTimeout(() => {
        const itemsMark = document.querySelectorAll("mark");
        for (const item of itemsMark) {
          if (!item.textContent.trim()) {
            item.style.display = "none";
          } else if (item.textContent.trim()) {
            item.style.display = "";
          }
        }
      }, 140);
      // ====== Removing list marker end ========
    }
    setRepeat(false);
    if (result) {
      const resultElement = document.getElementById("results");
      resultElement.classList.remove("hidden");
    }
    if (!repeat) {
      const timer = setTimeout(() => {
        setRepeat(true);
      }, 300);
    }
  };

  //==========Janky Multi Clicker fix end========
  const printAll = (e) => {
    e.preventDefault();
    window.print(e);
  };

  const formReset = () => {
    //document.getElementById("mmpi-form").reset();
    window.location.reload(false);
  };

  return (
    <div className="form">
      <form
        className="form-container"
        id="mmpi-form"
        onSubmit={mmpi_calculate_multiple}
      >
        <h1>Insert MIKAT Data</h1>
        <p
          style={{
            fontSize: "14px",
            paddingBottom: "10px",
            color: "white",
            fontWeight: "500",
          }}
        >
          JK: 1 (laki-laki) / 0 (perempuan) | Ulangan: 1 (ya) / 0 (tidak)
        </p>
        <div className="input-container">
          <div className="identitas">
            <span className="wrapper">
              <label>JK</label>
              <input placeholder="JK"></input>
            </span>
            <span className="wrapper">
              <label>Ulangan</label>
              <input placeholder="Ulangan"></input>
            </span>
          </div>
          <div className="leftHalf">
            <span className="wrapper">
              <label>A</label>
              <input placeholder="A"></input>
            </span>
            <span className="wrapper">
              <label>R</label>
              <input placeholder="R"></input>
            </span>
            <span className="wrapper">
              <label>Mas</label>
              <input placeholder="Mas"></input>
            </span>
            <span className="wrapper">
              <label>Es</label>
              <input placeholder="Es"></input>
            </span>
            <span className="wrapper">
              <label>Dy</label>
              <input placeholder="Dy"></input>
            </span>
            <span className="wrapper">
              <label>Do</label>
              <input placeholder="Do"></input>
            </span>
            <span className="wrapper">
              <label>Re</label>
              <input placeholder="Re"></input>
            </span>
            <span className="wrapper">
              <label>Pr</label>
              <input placeholder="Pr"></input>
            </span>
            <span className="wrapper">
              <label>St</label>
              <input placeholder="St"></input>
            </span>
            <span className="wrapper">
              <label>Cn</label>
              <input placeholder="Cn"></input>
            </span>
          </div>
          <div className="rightHalf">
            <span className="wrapper">
              <label>?</label>
              <input placeholder="?"></input>
            </span>
            <span className="wrapper">
              <label>L</label>
              <input placeholder="L"></input>
            </span>
            <span className="wrapper">
              <label>F</label>
              <input placeholder="F"></input>
            </span>
            <span className="wrapper">
              <label>K</label>
              <input placeholder="K"></input>
            </span>
            <span className="wrapper">
              <label>1</label>
              <input placeholder="1"></input>
            </span>
            <span className="wrapper">
              <label>2</label>
              <input placeholder="2"></input>
            </span>
            <span className="wrapper">
              <label>3</label>
              <input placeholder="3"></input>
            </span>
            <span className="wrapper">
              <label>4</label>
              <input placeholder="4"></input>
            </span>
            <span className="wrapper">
              <label>5</label>
              <input placeholder="5"></input>
            </span>
            <span className="wrapper">
              <label>6</label>
              <input placeholder="6"></input>
            </span>
            <span className="wrapper">
              <label>7</label>
              <input placeholder="7"></input>
            </span>
            <span className="wrapper">
              <label>8</label>
              <input placeholder="8"></input>
            </span>
            <span className="wrapper">
              <label>9</label>
              <input placeholder="9"></input>
            </span>
            <span className="wrapper">
              <label>0</label>
              <input placeholder="0"></input>
            </span>
          </div>
        </div>
        <div className="buttonBox">
          <button className="glass-button" role="button" ref={buttonRef}>
            Calculate
          </button>
        </div>
        <div className="buttonBox">
          <p>
            <mark
              style={{
                fontSize: "18px",
                padding: "5px",
                color: "rgba(0,0,0,0.8)",
                fontWeight: "600",
                background: "white",
                borderRadius: "10px",
              }}
            >
              Gunakanlah ini untuk cross-check. Saya tidak bertanggungjawab atas
              apapun
            </mark>
          </p>
          {/* <p
            style={{
              fontSize: "18px",
              paddingBottom: "10px",
              color: "white",
              fontWeight: "600",
            }}
          >
            Mohon dikabari apabila menemukan kesalahan.
          </p> */}
          <div className="buttonBox">
            <button className="glass-buttonClear" onClick={formReset}>
              Clear
            </button>
            <button className="glass-buttonSave" onClick={printAll}>
              Save
            </button>
          </div>
        </div>
      </form>
      <div className="results hidden" id="results">
        {/* ===================Prompt awal start==================== */}
        <p>
          <strong>
            <mark
              style={{
                fontSize: "15px",
                padding: "0 10px 0 10px",
                color: "rgba(0,0,0,0.8)",
                background: "white",
                borderRadius: "10px",
              }}
            >
              {notesTambahan}
            </mark>
          </strong>
        </p>
        <ol>
          <li>
            <p>
              <Markdown components={{ p: "span" }}>{ulangan}</Markdown>
              <Markdown components={{ p: "span" }}>{spontan}</Markdown>
              <Markdown components={{ p: "span" }}>{defensive}</Markdown>
              <Markdown components={{ p: "span" }}>{skalaF}</Markdown>
            </p>
          </li>
          {/* ===================Prompt awal end==================== */}

          {/* ===================Prompt Skala Kepribadian Start==================== */}

          {/* ===================Prompt Skala Kepribadian Start==================== */}
          <li>
            <p>
              <strong>Skala Kepribadian</strong>
            </p>
            <ul>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>{kep123}</Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>{skalaEs}</Markdown>
                  <Markdown components={{ p: "span" }}>{kepCemas}</Markdown>
                  <Markdown components={{ p: "span" }}>
                    {profilRepresi}
                  </Markdown>
                  <Markdown components={{ p: "span" }}>
                    {skalaEsAMasREnd}
                  </Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>
                    {kepPsikopatik}
                  </Markdown>
                  <Markdown components={{ p: "span" }}>{kepRe}</Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>{kepDominan}</Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>{skalaMinat}</Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>{kepParanoid}</Markdown>
                  <Markdown components={{ p: "span" }}>{kepPr}</Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>
                    {kepSistematis}
                  </Markdown>
                  <Markdown components={{ p: "span" }}>
                    {kepKejadianAneh}
                  </Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>{kepNol}</Markdown>
                  <Markdown components={{ p: "span" }}>{kepEmosi}</Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}></Markdown>
                  {kepSt}
                  <Markdown components={{ p: "span" }}></Markdown>
                  {kepKonflik}
                </p>
              </li>
            </ul>
          </li>

          {/* =====Prompt Kesimpulan Deskripsi Kepribadian Start==== */}
          <li>
            <p>
              <strong>Kesimpulan Deskripsi Kepribadian</strong>
            </p>
            <ul>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>{profilAll}</Markdown>
                  <Markdown components={{ p: "span" }}>{profilLiar}</Markdown>
                  <Markdown components={{ p: "span" }}>{profilEnd}</Markdown>
                </p>
              </li>
              <li>
                <p>
                  <Markdown components={{ p: "span" }}>{konflik}</Markdown>
                </p>
              </li>
              <li>
                <p>Pengamatan terhadap Ciri Kepribadian:</p>
                <p>
                  <mark
                    style={{
                      fontSize: "15px",
                      padding: "0 10px 0 10px",
                      color: "rgba(0,0,0,0.8)",
                      fontWeight: "600",
                      background: "white",
                      borderRadius: "10px",
                    }}
                  >
                    Urutan pertama, pada awalan kalimat dituliskan "Subyek"...
                    Urutan selanjutnya menggunakan "Ia"
                  </mark>
                </p>
              </li>
              <ul>
                <li>
                  <p>
                    <Markdown components={{ p: "span" }}>
                      {ciriKepribadianPsikopatik}
                    </Markdown>
                  </p>
                </li>
                <li>
                  <p>
                    <Markdown components={{ p: "span" }}>{citraDiri}</Markdown>
                  </p>
                </li>
                <li>
                  <p>
                    <Markdown components={{ p: "span" }}>{skalaRe}</Markdown>
                  </p>
                </li>
                <li>
                  <p>
                    <Markdown components={{ p: "span" }}>{skalaSt}</Markdown>
                  </p>
                </li>
                <li>
                  <p>
                    <Markdown components={{ p: "span" }}>{skalaNol}</Markdown>
                    <Markdown components={{ p: "span" }}>
                      {skalaDominan}
                    </Markdown>
                  </p>
                </li>
                <li>
                  <p>
                    <Markdown components={{ p: "span" }}>{skalaMinat}</Markdown>
                  </p>
                </li>
                <li>
                  <p>
                    <Markdown components={{ p: "span" }}>{skalaEs}</Markdown>
                    <Markdown components={{ p: "span" }}>{skalaEsEnd}</Markdown>
                  </p>
                </li>
                <li>
                  <p>
                    <mark
                      style={{
                        fontSize: "15px",
                        padding: "0 10px 0 10px",
                        color: "rgba(0,0,0,0.8)",
                        fontWeight: "600",
                        background: "white",
                        borderRadius: "10px",
                      }}
                    >
                      Pilih penambah kesimpulan lainnya Skala Es ("Namun..."):
                    </mark>
                  </p>
                </li>

                <ul>
                  <li>
                    <p>
                      <Markdown components={{ p: "span" }}>
                        {skalaEsCemasDominan}
                      </Markdown>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Markdown components={{ p: "span" }}>
                        {skalaEsPsikopatik}
                      </Markdown>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Markdown components={{ p: "span" }}>
                        {skalaEsParanoid}
                      </Markdown>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Markdown components={{ p: "span" }}>
                        {skalaEsTidakAman}
                      </Markdown>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Markdown components={{ p: "span" }}>
                        {skalaEsSt}
                      </Markdown>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Markdown components={{ p: "span" }}>
                        {skalaEsHisteria}
                      </Markdown>
                    </p>
                  </li>
                </ul>
              </ul>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Form;
