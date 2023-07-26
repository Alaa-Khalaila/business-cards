import styles from "./EditCard.module.css";
import jo from "../../images/jo.png";
import { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import CartContext from "../../CartContex";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function EditCard() {
  const { id } = useParams();
  const [translate] = useTranslation("global");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useContext(CartContext);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const firstNumHandler = (e) => {
    setFirstNum(e.target.value);
  };
  const secondNumHandler = (e) => {
    setSecondNum(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const siteHandler = (e) => {
    setSite(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const [name, setName] = useState("Your Name");
  const [firstNum, setFirstNum] = useState("+962777777");
  const [secondNum, setSecondNum] = useState("+962888889");
  const [email, setEmail] = useState("test@gmail.com");
  const [site, setSite] = useState("www.test.com");
  const [location, setLocation] = useState("www.test.com");

  const [counter, setCounter] = useState(1);

  const onAddClick = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const onRemoveClick = () => {
    if (counter - 1) {
      const newCounter = counter - 1;
      setCounter(newCounter);
    }
  };
  return (
    <>
      {id === "1" ? (
        <div className={styles.all + " container"} dir="ltr">
          <div className={styles.card} dir="ltr">
            <div className={styles.upper}>
              <img src={jo} />
            </div>
            <div className={styles.lower}>
              <div className={styles.name}>{name}</div>
              <div className={styles.data}>
                <div>
                  <div className={styles.data_inner}>
                    <i class="fa fa-phone"></i>
                    <div>
                      <div>{firstNum}</div>
                      <div>{secondNum}</div>
                    </div>
                  </div>
                  <div className={styles.data_inner}>
                    <i class="fa fa-envelope"></i>
                    <div>
                      <div>{site}</div>
                      <div>{email}</div>
                    </div>
                  </div>
                  <div className={styles.data_inner}>
                    <i class="fa fa-map-marker"></i>
                    <div>
                      <div>{location}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.bg}>
                  <div className={styles.bg_first}></div>
                  <div className={styles.bg_inner}></div>
                </div>
              </div>
            </div>
          </div>
          <form dir="rtl" className={styles.formInfo}>
            <div>
              <label htmlFor="firstNum">الاسم</label>
              <input
                onKeyUp={nameHandler}
                defaultValue={name}
                id="firstNum"
                type="text"
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="firstNum">الرقم الاول</label>
              <input
                onKeyUp={firstNumHandler}
                defaultValue={firstNum}
                id="firstNum"
                type="text"
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="secondNum">الرقم الثاني</label>
              <input
                defaultValue={secondNum}
                type="text"
                onKeyUp={secondNumHandler}
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="secondNum">الموقع الالكتروني</label>
              <input
                defaultValue={site}
                type="text"
                onKeyUp={siteHandler}
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="secondNum">الايميل</label>
              <input
                defaultValue={email}
                type="text"
                onKeyUp={emailHandler}
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="secondNum">الموقع</label>
              <input
                defaultValue={location}
                type="text"
                onKeyUp={locationHandler}
                className={styles.input}
              />
            </div>
            <div>
              <div>عدد البطاقات:</div>
              <div className={styles.btns}>
                <Button
                  onClick={onRemoveClick}
                  classList="red"
                  text="-"
                ></Button>
                <span>{counter}</span>
                <Button
                  onClick={onAddClick}
                  classList="yellow"
                  text="+"
                ></Button>
              </div>
            </div>

            <div>
              ملاحظة: سيتم ارسال رمز خاص لكل بطاقة للدخول على السحب, ضاعف فرصة
              ربحك للسيارة بشراء اكثر من بطاقة
            </div>
            <NavLink to="/" className="mt-2">
              <Button
                classList={styles.add + " yellow"}
                text="اضف الى السلة"
                onClick={() => addToCart(counter, id)}
              ></Button>
            </NavLink>
          </form>
        </div>
      ) : (
        ""
      )}
      {id === "2" ? <div>{id}</div> : ""}
    </>
  );
}

export default EditCard;
