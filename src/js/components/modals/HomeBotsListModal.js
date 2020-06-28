import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {List, Cell, Avatar, ModalPage, ModalPageHeader, PanelHeaderButton, withPlatform, IOS} from "@vkontakte/vkui";

import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';

const bots = [
    {
        name: 'ЧЁРНЫЙ GTARP',
        avatar: 'https://sun9-64.userapi.com/Qww1fkk2Gpqj1DrACw_MIzhzM13IwKvYUncKAQ/5ivbIpzrUpE.jpg?ava=1',
        desc: 'Основное сообщество'
    },
    {
        name: 'РАЗДАЧИ ОТ ЧЁРНОГО GTARP',
        avatar: 'https://sun9-64.userapi.com/Qww1fkk2Gpqj1DrACw_MIzhzM13IwKvYUncKAQ/5ivbIpzrUpE.jpg?ava=1',
        desc: 'Раздачи и покупка аккаунтов'
    },
];

class HomeBotsListModal extends React.Component {

    render() {
        const {id, onClose, openModal, platform} = this.props;

        return (
            <ModalPage
                id={id}
                header={
                    <ModalPageHeader
                        left={platform !== IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
                        right={platform === IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
                    >
                        Наши сообщества
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={80}
            >
                <List>
                    {bots.map((bot, index) => (
                        <Cell
                            key={index}
                            description={bot.desc}
                            before={<Avatar size={40} src={bot.avatar}/>}
                        >
                            {bot.name}
                        </Cell>
                    ))}
                </List>
            </ModalPage>
        );
    }

}

const mapDispatchToProps = {
    openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(HomeBotsListModal));
