export class RemoveSpaceValueConverter {
    toView(value: string) {
        if (value) {
            try {
                return value.replace(/\s/g, '');
            } catch (error) {
                console.log(`Error in remove-space-value-converter: ${error}`);
            }
        }
    }
}