import styles from '../styles/MyImage.module.css'
import Image from 'next/image'
const MyImage = (): JSX.Element => {
  return (
    <div className={styles.profile}>
      <h1>About Me</h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src="/images/IMG_8276.JPG"
            width={400}
            height={400}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="my image"
          />
        </div>
        <div className={styles.detail}>
          <div className={styles.name}>Naoki Uehara</div>
          <p>
            2019年3月京都大学工学部物理工学科卒業後、2021年3月京都大学大学院エネルギー科学研究科を修了。2021年4月ニフティ株式会社に入社。現在は、ニフティニュースの開発・運用に携わっています。
          </p>
          <p>バックエンドを中心に、フロントエンドなど幅広く興味があります。</p>
        </div>
      </div>
    </div>
  )
}

export default MyImage
