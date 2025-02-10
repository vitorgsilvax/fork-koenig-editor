import React from 'react';
import {triggerCustomEvent} from '../utils/customEvents/triggerCustomEvent';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';

export function FreeMaterialBannerNodeComponent({nodeKey}) {
    const [editor] = useLexicalComposerContext();

    // Log to confirm if the component is being rendered
    React.useEffect(() => {
        triggerCustomEvent({
            eventName: 'free-material-banner',
            data: {
                action: 'open'
            }
        });
        // eslint-disable-next-line no-console
        console.log('FreeMaterialBannerNodeComponent mounted', nodeKey);
    }, [nodeKey, editor]);

    return <p>Test</p>;
}
