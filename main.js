var fieldCard = {
    template: '<td><transition name="show_can_play"><div class="can_put_card" v-if="can_play"></div></transition>' +
        '<transition name="field_card"><img :key="id" v-if="status==3" :src="imageSrc"></transition></td>',
    props: {
        id : {
            type: Number,
            required: true
        },
        can_play : {
            type: Boolean,
            required: true
        },
        status : {
            type : Number,
            required: true
        },
        imageSrc : {
            type : String,
            required: true
        }
    },
}

var modalWindow = {
    template: '<transition name="modal">'+'' +
        '            <div class="modal-mask">' +
        '                <div class="modal-wrapper">' +
        '                    <div class="modal-container">' +
        '                        <div class="modal-header">' +
        '                            <slot name="header">' +
        '                                default header' +
        '                            </slot>' +
        '                        </div>' +
        '                        <div class="modal-body">' +
        '                            <slot name="body">' +
        '                                default body' +
        '                            </slot>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </transition>'
}

const progressionStage = {
    putSeven:0,
    putCard:1,
    gameEnd:2
}

const progressionStageText = ["7を並べてください。","の番です。","の勝ちです!!"];

var app = new Vue({
    el: '#app',
    components: {
        'field-card': fieldCard,
        'modal': modalWindow
    },
    data: {
        message: 'なかあかの7ならべ',
        showModal: false,
        progression_stage: progressionStage.putSeven,
        card_list: [
            {id: 1, number: 1, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_01.png'},
            {id: 2, number: 2, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_02.png'},
            {id: 3, number: 3, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_03.png'},
            {id: 4, number: 4, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_04.png'},
            {id: 5, number: 5, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_05.png'},
            {id: 6, number: 6, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_06.png'},
            {id: 7, number: 7, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_07.png'},
            {id: 8, number: 8, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_08.png'},
            {id: 9, number: 9, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_09.png'},
            {id: 10, number: 10, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_10.png'},
            {id: 11, number: 11, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_11.png'},
            {id: 12, number: 12, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_12.png'},
            {id: 13, number: 13, status: 0, can_play: false, imageSrc: 'images/heart/card_heart_13.png'},
            {id: 14, number: 1, status: 0, can_play: false, imageSrc: 'images/club/card_club_01.png'},
            {id: 15, number: 2, status: 0, can_play: false, imageSrc: 'images/club/card_club_02.png'},
            {id: 16, number: 3, status: 0, can_play: false, imageSrc: 'images/club/card_club_03.png'},
            {id: 17, number: 4, status: 0, can_play: false, imageSrc: 'images/club/card_club_04.png'},
            {id: 18, number: 5, status: 0, can_play: false, imageSrc: 'images/club/card_club_05.png'},
            {id: 19, number: 6, status: 0, can_play: false, imageSrc: 'images/club/card_club_06.png'},
            {id: 20, number: 7, status: 0, can_play: false, imageSrc: 'images/club/card_club_07.png'},
            {id: 21, number: 8, status: 0, can_play: false, imageSrc: 'images/club/card_club_08.png'},
            {id: 22, number: 9, status: 0, can_play: false, imageSrc: 'images/club/card_club_09.png'},
            {id: 23, number: 10, status: 0, can_play: false, imageSrc: 'images/club/card_club_10.png'},
            {id: 24, number: 11, status: 0, can_play: false, imageSrc: 'images/club/card_club_11.png'},
            {id: 25, number: 12, status: 0, can_play: false, imageSrc: 'images/club/card_club_12.png'},
            {id: 26, number: 13, status: 0, can_play: false, imageSrc: 'images/club/card_club_13.png'},
            {id: 27, number: 1, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_01.png'},
            {id: 28, number: 2, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_02.png'},
            {id: 29, number: 3, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_03.png'},
            {id: 30, number: 4, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_04.png'},
            {id: 31, number: 5, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_05.png'},
            {id: 32, number: 6, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_06.png'},
            {id: 33, number: 7, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_07.png'},
            {id: 34, number: 8, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_08.png'},
            {id: 35, number: 9, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_09.png'},
            {id: 36, number: 10, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_10.png'},
            {id: 37, number: 11, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_11.png'},
            {id: 38, number: 12, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_12.png'},
            {id: 39, number: 13, status: 0, can_play: false, imageSrc: 'images/diamond/card_diamond_13.png'},
            {id: 40, number: 1, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_01.png'},
            {id: 41, number: 2, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_02.png'},
            {id: 42, number: 3, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_03.png'},
            {id: 43, number: 4, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_04.png'},
            {id: 44, number: 5, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_05.png'},
            {id: 45, number: 6, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_06.png'},
            {id: 46, number: 7, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_07.png'},
            {id: 47, number: 8, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_08.png'},
            {id: 48, number: 9, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_09.png'},
            {id: 49, number: 10, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_10.png'},
            {id: 50, number: 11, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_11.png'},
            {id: 51, number: 12, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_12.png'},
            {id: 52, number: 13, status: 0, can_play: false, imageSrc: 'images/spade/card_spade_13.png'}
        ],
        pass_count : [0,0],
        enable_pass : false,
        player_amount : 2,
        turn_player_id: 1,
        amount_of_put_seven: [0,0]
    },
    computed: {
        heartCard() {
            return this.card_list.slice(0,13);
        },
        clubCard() {
            return this.card_list.slice(13,26);
        },
        diaCard() {
            return this.card_list.slice(26,39);
        },
        spadeCard() {
            return this.card_list.slice(39,52);
        },
        progressionMessageText() {
            return "プレイヤー" + this.turn_player_id + "さん" + progressionStageText[this.progression_stage];
        },
        showModalMessage() {
            $modal_message_text = [
                ['カードを配りました','7を並べてください'],
                ['ゲームスタート','カードを並べてください'],
                ['ゲーム終了!', this.progressionMessageText ]
            ];
            return $modal_message_text[this.progression_stage];
        },
        player1CardWidth() {
            $card_amount = this.card_list.filter
            (
                function (value) {
                    return (value.status == 1 )
                }
            ).length;
            return ( 1000 / $card_amount ) + 'px';
        },
        player2CardWidth() {
            $card_amount = this.card_list.filter
            (
                function (value) {
                    return (value.status == 2 )
                }
            ).length;
            return ( 1000 / $card_amount ) + 'px';
        }
    },
    created: function () {
        this.preparationCard();
        this.startGame();
    },
    methods: {
        preparationCard: function() {
            this.card_list = _.shuffle(this.card_list);

            half_card = this.card_list.length / 2;
            for( let i = 0; i < half_card; i++ ) {
                this.card_list[i].status = 1;
            }
            for( let i = half_card; i < this.card_list.length; i++ ) {
                this.card_list[i].status = 2;
            }

            this.card_list.sort(function (a, b) {
                return a.id - b.id
            });
        },
        startGame: function () {
            this.startPutSeven();
            this.ckeckPlayerPutSevenStatus();
            this.showTemporarilyModal();
        },
        showTemporarilyModal() {
            this.showModal = true;
            setTimeout(() => {
                this.showModal = false;
            }, 2000);
        },
        selectCard : function( index ) {
            if( ! this.ifTheCardPlayerHave( index ) ) {
                console.log( "自分のカードを選択してください" );
                return;
            }
            if ( this.progression_stage == progressionStage.putSeven ) {
                if ( ! this.ifTheCardSeven( index ) ) {
                    console.log( "7を選択してください" );
                    return;
                }
                this.putSeven( index );
            } else if ( this.progression_stage == progressionStage.putCard ) {
                if ( this.card_list[index].can_play == true ) {
                    this.putCard( index );
                    if ( ! this.checkIfGameEnd() ) {
                        this.checkNextPlayerPutStage();
                    }
                }
            }
        },
        ifTheCardPlayerHave : function( index ) {
            return ( this.card_list[index].status == this.turn_player_id );
        },
        ifTheCardSeven : function( index ) {
            return ( this.card_list[index].number == 7 );
        },
        putSeven : function(index ) {
            this.putCard( index );
            this.amount_of_put_seven[this.turn_player_id-1]++;
            this.ckeckPlayerPutSevenStatus();
        },
        startPutSeven : function () {
            for (let i = 0, l = this.card_list.length; i < l; i++) {
                if ( this.card_list[i].number == 7 ) {
                    this.card_list[i].can_play = true;
                }
            }
        },
        ckeckPlayerPutSevenStatus : function () {
            if ( this.checkIfThePlayerHaveSeven( 1 ) ) {
                this.checkPlayerPutSevenStage( 1 );
            } else if ( this.checkIfThePlayerHaveSeven( 2 ) ) {
                this.checkPlayerPutSevenStage( 2 );
            } else {
                this.finishPutSevenStage();
            }
        },
        checkIfThePlayerHaveSeven : function( player_id ) {
            return ( this.card_list.filter(
                function (value) {
                    return ( value.number === 7 && value.status == player_id )
                }
            ).length > 0 )
        },
        checkPlayerPutSevenStage: function( player_id ) {
            this.turn_player_id = player_id;
        },
        finishPutSevenStage: function() {
            this.progression_stage = progressionStage.putCard;

            this.turn_player_id = this.checkPutFirstPlayerAfterFinishPutSeven();
            this.enable_pass = true;
            this.showTemporarilyModal();
        },
        checkPutFirstPlayerAfterFinishPutSeven: function() {
            index = 0;
            value = 0;
            for (let i = 0, l = this.amount_of_put_seven.length; i < l; i++) {
                if (value < this.amount_of_put_seven[i]) {
                    value = this.amount_of_put_seven[i];
                    index = i
                }
            }
            return index + 1;
        },
        checkNextPlayerPutStage : function() {
            this.turn_player_id++;
            if ( this.turn_player_id > this.player_amount ) {
                this.turn_player_id = 1;
            }
        },
        putCard : function( index ) {
            this.card_list[index].status = 3;
            this.updateWhereCanPut( index );
        },
        updateWhereCanPut : function( index ) {
            this.card_list[index].can_play = false;
            if ( this.card_list[index].number > 1 && this.card_list[index - 1].status != 3 ) {
                this.card_list[index - 1].can_play = true;
            }
            if ( this.card_list[index].number < 13 && this.card_list[index + 1].status != 3 ) {
                this.card_list[index + 1].can_play = true;
            }
        },
        pass : function() {
            this.pass_count[this.turn_player_id-1]++;
            this.checkNextPlayerPutStage();
        },
        checkIfGameEnd : function() {
            status = this.turn_player_id;
            if ( this.card_list.filter(
                function (value) {
                    return ( value.status == status )
                }
            ).length == 0 ) {
                this.progression_stage = progressionStage.gameEnd;
                this.showTemporarilyModal();
                return true;
            }
        },
    }
})