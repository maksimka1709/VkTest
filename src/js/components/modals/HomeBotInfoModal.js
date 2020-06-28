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
        avatar: 'https://sun9-46.userapi.com/c857532/v857532854/25de3/zv-bh73WI_g.jpg?ava=1',
        desc: 'Rivers'
    },
    {
        name: 'Руслан Гаджиев',
        avatar: 'https://sun9-14.userapi.com/Uebazij-w7YQEVuNoBVzZdMydfZCKXTowhEvCQ/2qQal_YM4IA.jpg?ava=1',
        desc: 'ЧСник'
    },
    {
        name: 'Максим Дёмин',
        avatar: 'https://sun9-26.userapi.com/c855520/v855520161/21b4cd/AZ2osKzhnL8.jpg?ava=1',
        desc: 'Черный Gangster'
    },
    {
        name: 'Александр Владимиров',
        avatar: 'https://sun9-2.userapi.com/c850416/v850416844/10a0e1/pAmwHvvkiWU.jpg?ava=1',
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
