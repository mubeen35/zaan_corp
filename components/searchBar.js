import Image from "next/image";
import styles from '@/styles/Search.module.css';

const Search = () => {
    return (
        <div className={styles.search_container}>
            <div className={styles.inner_search_container}>
                <Image src='/Search.png' width={20} height={20} />
                <input type='text' placeholder="Search" className={styles.search_field} />
            </div>
        </div>
    );
}
export default Search;