function getCurrentSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) {
        return 'First Thaw. Lose a layer.';
    } else if (month >= 6 && month <= 8) {
        return 'Heat Index. Dress for the heatwave.';
    } else if (month >= 9 && month <= 11) {
        return 'Fuzzy Season has landed.';
    } else {
        return 'Deep Pile. Get Warm.';
    }
}

export default getCurrentSeason;