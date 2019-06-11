require_relative './player'
require_relative './question'
#REQUIRE STUFF HERE**

class Game

    #constructor: create two players 
    def initialize
        @player1 = Player.new 'Player 1'
        @player2 = Player.new 'Player 2'
        @round = 1
        @players = [@player1, @player2]
        @current_player = @players[0]

    end

    def status
        puts '--------- Status ----------'
        puts "#{@players[0].name} lives #{@players[0].lives}"
        puts "#{@players[1].name} lives #{@players[1].lives}"
    end
        
    def game_over?
        
        #filter any dead players
        @players.select{|player| player.dead?}.count == 1
        
    end

    def winner

        @players.find{|player| !player.dead?}
    
    end

    def end_game

        puts '------- GAME OVER -------'
        puts "#{winner.name} has won!"

    end
        
    def run
        
        until (game_over?) do
            
            puts "-------- Round##{@round} ------------"
            
            #ask question (from question class)
            new_question = Question.new(@current_player)

            new_question.ask_question
            
            new_question.get_response
            
            new_question.verify_answer
            
            #change round
            @round += 1

            @players = @players.rotate!

            @current_player = @players[0]

            status
            sleep 1
            puts

        end

        end_game

    end

end

