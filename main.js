const zodiac = document.getElementById("zodiac");
const body = document.body;

const changebackgroundcolor = ()=>{
switch (zodiac.value){
  case "Aries":
    body.style.backgroundColor="red";
    break;
    case "Taurus":
        body.style.backgroundColor="green";
        break;
        case "Gemini":
            body.style.backgroundColor="yellow";
            break;
            case "Cancer":
                body.style.backgroundColor="white";
                break;
                case "Leo":
                    body.style.backgroundColor="orange";
                    break;
                    case "Virgo":
                        body.style.backgroundColor="blue";
                        break;
                        case "Libra":
                            body.style.backgroundColor="pink";
                            break;
                            case "Scorpio":
                                body.style.backgroundColor="grey";
                                break;
                            case "Sagittarius":
                                body.style.backgroundColor="purple";
                                break;
                                case "Aquarius":
                                    body.style.backgroundColor="green";
                                    break;
                                    case "Pisces":
                                        body.style.backgroundColor="blue";
                                        break;

}
};
