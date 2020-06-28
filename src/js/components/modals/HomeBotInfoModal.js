import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {List, Cell, Avatar, ModalPage, ModalPageHeader, PanelHeaderButton, withPlatform, IOS} from "@vkontakte/vkui";

import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';

const bots = [
    {
        name: 'Никита Конев',
        avatar: 'https://sun9-5.userapi.com/X8CeQPwZsa1nzyuPEK7bW0rkUaauvNG0uC4glw/47-qPDtqb7w.jpg',
        desc: 'Rivers'
    },
    {
        name: 'Руслан Гаджиев',
        avatar: 'https://sun9-5.userapi.com/X8CeQPwZsa1nzyuPEK7bW0rkUaauvNG0uC4glw/47-qPDtqb7w.jpg',
        desc: 'ЧСник'
    },
    {
        name: 'Максим Дёмин',
        avatar: 'https://sun9-5.userapi.com/X8CeQPwZsa1nzyuPEK7bW0rkUaauvNG0uC4glw/47-qPDtqb7w.jpg',
        desc: 'Черный Gangster'
    },
    {
        name: 'Александр Владимиров',
        avatar: 'https://sun9-5.userapi.com/X8CeQPwZsa1nzyuPEK7bW0rkUaauvNG0uC4glw/47-qPDtqb7w.jpg',
        desc: 'developer'
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
                        Наша команда
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
