require_relative './player'

class Question

    def initialize(player)

        @player = player
        @int1 = rand(1..20)
        @int2 = rand(1..20)
        @response = 0

    end

    def ask_question()

        puts "#{@player.name}: What does #{@int1} plus #{@int2} equal?"

    end

    def get_response

        @response = gets.chomp.to_i
        
    end

    def verify_answer

        answer = (@int1 + @int2)

        if @response == answer
            
            puts "#{@player.name}: YES! You are correct"

        else

            @player.lose_life
            puts "#{@player.name}: Seriously? No!"

        end

    end

end