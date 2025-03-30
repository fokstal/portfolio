import { LANGUAGE_ENUM } from "@scripts/const/const";

function getYearsFromDate(date: Date, lang: LANGUAGE_ENUM): string {
    const currentDate = new Date();
    const yearsDifference = currentDate.getFullYear() - date.getFullYear();

    const hasBirthdayPassed =
        currentDate.getMonth() > date.getMonth() ||
        (currentDate.getMonth() === date.getMonth() &&
            currentDate.getDate() >= date.getDate());

    const age = hasBirthdayPassed ? yearsDifference : yearsDifference - 1;

    switch (lang) {
        case LANGUAGE_ENUM.BY:
            if (age % 10 === 1 && age % 100 !== 11) {
                return `${age} год`;
            } else if (
                age % 10 >= 2 &&
                age % 10 <= 4 &&
                (age % 100 < 10 || age % 100 >= 20)
            ) {
                return `${age} гады`;
            } else {
                return `${age} гадоў`;
            }
        case LANGUAGE_ENUM.RU:
            if (age % 10 === 1 && age % 100 !== 11) {
                return `${age} год`;
            } else if (
                age % 10 >= 2 &&
                age % 10 <= 4 &&
                (age % 100 < 10 || age % 100 >= 20)
            ) {
                return `${age} года`;
            } else {
                return `${age} лет`;
            }
        case LANGUAGE_ENUM.EN:
            return age === 1 ? `${age} year` : `${age} years`;
        default:
            throw new Error("Unsupported language");
    }
}

export default getYearsFromDate;
