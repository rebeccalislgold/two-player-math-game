class Player

    #allow get of player name
    attr_reader :name

    # allow get and set of # of lives
    attr_accessor :lives

    # constructor
    def initialize name
        @name = name
        @lives = 3
    end

    # to calculate number of remaining lives
    def lose_life
        # code to check in game if game lost
        self.lives = self.lives - 1

    end

    def dead? 

        lives == 0

    end

end