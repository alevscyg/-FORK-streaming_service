import styles from './MovieParams.module.scss';
import TextLinkUI from '../../UI/links/TextLink/TextLinkUI';
import TextBadge from '../../UI/badges/TextBadge/TextBadge';
import Image from 'next/image';
import soundIcon from '../../../../public/icons/sound.png';
import subtitlesIcon from '../../../../public/icons/subtitles.png';
import IMovie from '../../../models/IMovie';
import { firstCapitalLetter, minutesToHours } from '../../../utils/functions';
import { useRouter } from 'next/router';

interface MovieParamsProps {
    movie: IMovie;
}

const MovieParams = ({ movie }: MovieParamsProps) => {
    const { locale } = useRouter();

    return (
        <div className={styles.container} data-testid="div-params">
            <div className={styles.container__list}>
                <TextLinkUI href="/" option="bright">
                    {movie.year}
                </TextLinkUI>
                <span className={styles.container__listItem}>{minutesToHours(movie.movieLength)}</span>
                <span className={styles.container__listItem}>{movie.ageRating}+</span>
            </div>
            <div className={styles.container__list}>
                <TextLinkUI
                    href="/"
                    option="bright"
                    className={[styles.container__listItem, styles.container__listItem_point].join(' ')}
                >
                    {movie.countries[0].name}
                </TextLinkUI>
                {movie.genres.slice(0, 3).map((genre) => (
                    <TextLinkUI
                        key={genre.id}
                        href="/"
                        option="bright"
                        className={[styles.container__listItem, styles.container__listItem_point].join(' ')}
                    >
                        {firstCapitalLetter(locale === 'ru' ? genre.name : genre.enName ? genre.enName : genre.name)}
                    </TextLinkUI>
                ))}
            </div>
            <div className={styles.container__list}>
                <TextBadge text="FullHD" />
                <Image
                    src={soundIcon}
                    alt="soundIcon"
                    className={[styles.container__listIcon, styles.container__listIcon_sound].join(' ')}
                />
                <div className={styles.container__listItem}>
                    {['Рус', 'Eng'].map((voice) => (
                        <div
                            key={voice}
                            className={[styles.container__listItem, styles.container__listItem_point].join(' ')}
                        >
                            {voice}
                        </div>
                    ))}
                </div>

                <Image src={subtitlesIcon} alt="subtitlesIcon" className={styles.container__listIcon} />
                <div className={styles.container__listItem}>
                    <div className={[styles.container__listItem, styles.container__listItem_point].join(' ')}>Рус</div>
                </div>
            </div>
        </div>
    );
};

export default MovieParams;
