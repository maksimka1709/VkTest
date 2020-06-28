import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, View, Header, Cell, PanelHeaderButton} from "@vkontakte/vkui"
import '@vkontakte/vkui/dist/vkui.css';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

class HomeBotsListModal extends React.Component {

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderButton><Icon28Notifications/></PanelHeaderButton>}>VKUI</PanelHeader>
        <Group header={<Header mode="secondary">Items</Header>}>
          <Cell>Hello</Cell>
          <Cell>World</Cell>
        </Group>
        <Group>
        <Div>
                    <Button mode="secondary" size="l" stretched={true} onClick={() => this.props.openModal('MODAL_PAGE_BOT_INFO')}>Наша команда</Button>
                    </Div>
        </Group>            
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    openModal
};

export default connect(null, mapDispatchToProps)(HomeBotsListModal);
