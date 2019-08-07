export class detectDevice {
    getDeviceType(): string {
        if(navigator.userAgent.match(/mobile/i)) {
            return 'Mobile';
        } else if (navigator.userAgent.match(/iPad|Android|Touch/i)) {
            return 'Tablet';
        } else {
            return 'Desktop';
        }
    }
}
